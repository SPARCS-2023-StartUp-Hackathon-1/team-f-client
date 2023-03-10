import { ChangeEvent, useEffect } from 'react';
import {
  QuestionAtomFamilyProps,
  questionAtomFamily,
  questionMarkAtom,
  questionOrderAtom,
  tailQuestionAtomFamily,
  tailQuestionIdAtomFamily,
} from '@/store/question/atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { AIBubble } from '../common/AIBubble';
import { Button } from '../common/Button';
import { Chip } from '../common/Chip';
import { GNB } from '../common/GNB';
import { Icon } from '../common/Icon';
import { Input } from '../common/Input';
import { UserBubble } from '../common/UserBubble';
import { useAnswerById } from '@/hooks/queries/useAnswerById';
import { useTailQuestionById } from '@/hooks/queries/useTailQuestionByIdQuery';

const TailQuestion = ({ id }: { id: number }) => {
  const [order, setOrder] = useRecoilState(questionOrderAtom);
  const [mark, setMark] = useRecoilState(questionMarkAtom);
  const setQuestion = useSetRecoilState(questionAtomFamily(order));
  const { data: tailQuestionData, isSuccess: tailQuestionIsSuccess } = useTailQuestionById(id);
  const [tailQuestion, setTailQuestion] = useRecoilState(
    tailQuestionAtomFamily(tailQuestionData?.id as number)
  );
  const [tailQuestionIds, setTailQuestionIds] = useRecoilState(tailQuestionIdAtomFamily(order));
  const { data: aiAnswerData, isSuccess: aiAnswerIsSuccess } = useAnswerById(
    tailQuestionData?.id as number
  );

  useEffect(() => {
    if (aiAnswerIsSuccess)
      setTailQuestion(prev => ({
        ...prev,
        aiAnswer: aiAnswerData.answer,
      }));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTailQuestion(prev => ({ ...prev, userAnswer: { isAnswer: false, answer: e.target.value } }));
  };

  const isUserAnswer = tailQuestion.userAnswer.isAnswer;

  const isDisabled = tailQuestion.userAnswer.answer === '' && !isUserAnswer;

  const tailIsDisabled = tailQuestionIds.length >= 3;

  const handleTailButtonClick = () => {
    if (tailQuestionIsSuccess && !tailIsDisabled)
      setTailQuestionIds(prev => [...prev, tailQuestionData.id]);
  };

  const handleNextButtonClick = () => {
    setOrder(mark + 1);
    setMark(prev => prev + 1);
  };

  const handleAnswerButtonClick = () => {
    setTailQuestion(prev => ({
      ...prev,
      userAnswer: { isAnswer: true, answer: prev.userAnswer.answer },
    }));
  };

  return (
    <div className="w-full">
      {tailQuestionIsSuccess && (
        <AIBubble
          key={tailQuestionData?.id}
          questionChip={<Chip text={'?????? ??????'} chipType={'answer'} />}
          question={tailQuestionData.question}
          answerChip={<Chip text={'AI ??????'} chipType={'default'} />}
          answer={isUserAnswer ? tailQuestion.aiAnswer : ''}
        />
      )}
      {!isUserAnswer && <Input value={tailQuestion.userAnswer.answer} onChange={handleChange} />}
      {isUserAnswer && <UserBubble answer={tailQuestion.userAnswer.answer} />}
      <GNB>
        {isUserAnswer ? (
          <div className="grid grid-cols-[0.8fr_0.2fr] gap-[1rem]">
            <Button
              onClick={handleTailButtonClick}
              buttonType="primary"
              buttonText="?????? ??????"
              isDisabled={tailIsDisabled}
            />
            <Button
              onClick={handleNextButtonClick}
              buttonType="sub"
              buttonIcon={<Icon iconName="rightArrow" size={24} />}
            />
          </div>
        ) : (
          <Button
            onClick={handleAnswerButtonClick}
            buttonType="primary"
            buttonText="?????? ??????"
            isDisabled={isDisabled}
          />
        )}
      </GNB>
    </div>
  );
};

export default TailQuestion;

import { useAnswerById } from '@/hooks/queries/useAnswerById';
import { useTailQuestionById } from '@/hooks/queries/useTailQuestionByIdQuery';
import {
  questionAtomFamily,
  QuestionAtomFamilyProps,
  questionOrderAtom,
  tailQuestionAtomFamily,
  tailQuestionIdAtomFamily,
} from '@/store/question/atom';
import { ChangeEvent, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { AIBubble } from '../common/AIBubble';
import { Button } from '../common/Button';
import { Chip } from '../common/Chip';
import { GNB } from '../common/GNB';
import { Icon } from '../common/Icon';
import { Input } from '../common/Input';
import { UserBubble } from '../common/UserBubble';

const TailQuestion = ({ id }: { id: number }) => {
  const order = useRecoilValue(questionOrderAtom);
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

  const handleTailButtonClick = () => {
    if (tailQuestionIsSuccess) setTailQuestionIds(prev => [...prev, tailQuestionData.id]);
  };

  const handleNextButtonClick = () => {};

  const handleTailAnswerButtonClick = () => {};

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
          questionChip={<Chip text={'꼬리 질문'} chipType={'answer'} />}
          question={tailQuestionData.question}
          answerChip={<Chip text={'AI 답변'} chipType={'default'} />}
          answer={isUserAnswer ? tailQuestion.aiAnswer : ''}
        />
      )}
      {!isUserAnswer && <Input value={tailQuestion.userAnswer.answer} onChange={handleChange} />}
      {isUserAnswer && <UserBubble answer={tailQuestion.userAnswer.answer} />}
      <GNB>
        {isUserAnswer ? (
          <div className="grid grid-cols-[0.8fr_0.2fr] gap-[1rem]">
            <Button onClick={handleTailButtonClick} buttonType="primary" buttonText="꼬리 질문" />
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
            buttonText="작성 완료"
            isDisabled={isDisabled}
          />
        )}
      </GNB>
    </div>
  );
};

export default TailQuestion;

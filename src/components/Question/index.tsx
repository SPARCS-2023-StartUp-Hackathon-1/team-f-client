import { ChangeEvent, useEffect } from 'react';
import {
  questionAtomFamily,
  questionMarkAtom,
  questionOrderAtom,
  tailQuestionIdAtomFamily,
} from '@/store/question';

import { AIBubble } from '../common/AIBubble';
import { Button } from '../common/Button';
import { Chip } from '../common/Chip';
import { GNB } from '../common/GNB';
import { Icon } from '../common/Icon';
import { Input } from '../common/Input';
import { PageMark } from '../common/pageMark';
import TailQuestion from './TailQuestion';
import { UserBubble } from '../common/UserBubble';
import { useAnswerById } from '@/hooks/queries/useAnswerById';
import { useRecoilState } from 'recoil';

const Question = () => {
  const [order, setOrder] = useRecoilState(questionOrderAtom);
  const [mark, setMark] = useRecoilState(questionMarkAtom);
  const [question, setQuestion] = useRecoilState(questionAtomFamily(order));
  const [tailQuestionIds, setTailQuestionIds] = useRecoilState(tailQuestionIdAtomFamily(order));
  const { data: aiAnswerData, isSuccess: aiAnswerIsSuccess } = useAnswerById(
    question.basicQuestion.id
  );

  const isUserAnswer = question.userAnswer.isAnswer;

  const isDisabled = question.userAnswer.answer === '' && !isUserAnswer;

  useEffect(() => {
    if (aiAnswerIsSuccess)
      setQuestion(prev => ({
        ...prev,
        aiAnswer: aiAnswerData.answer,
      }));
  }, [aiAnswerIsSuccess]);

  const handleAnswerInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(prev => ({
      ...prev,
      userAnswer: { isAnswer: prev.userAnswer.isAnswer, answer: e.target.value },
    }));
  };

  const handleAnswerButtonClick = () => {
    setQuestion(prev => ({
      ...prev,
      userAnswer: { isAnswer: true, answer: prev.userAnswer.answer },
    }));
  };

  const handleTailButtonClick = () => {
    setQuestion(prev => ({
      ...prev,
      isTailQuestion: true,
    }));
  };

  const handleNextButtonClick = () => {
    setOrder(mark + 1);
    setMark(prev => prev + 1);
  };

  const handleOrderClick = (index: number) => {
    setOrder(index + 1);
  };

  return (
    <div className="h-full pb-[100px]">
      <div className="h-[64px] flex items-center">
        {Array(mark)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="first:ml-0 ml-[0.8rem]"
              onClick={() => handleOrderClick(index)}
            >
              <PageMark pageNumber={index + 1} isActive={order === index + 1} />
            </div>
          ))}
      </div>
      <AIBubble
        questionChip={<Chip text={'일반 질문'} chipType={'default'} />}
        question={question.basicQuestion.question}
        answerChip={<Chip text={'AI 답변'} chipType={'default'} />}
        answer={isUserAnswer ? question.aiAnswer : ''}
      />
      {!isUserAnswer && <Input value={question.userAnswer.answer} onChange={handleAnswerInput} />}
      {isUserAnswer && <UserBubble answer={question.userAnswer.answer} />}
      {question.isTailQuestion &&
        tailQuestionIds.map((id, index) => <TailQuestion key={index} id={id} />)}
      {!question.isTailQuestion && (
        <GNB>
          {isUserAnswer && !question.isTailQuestion ? (
            <div className="flex gap-[1rem]">
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
      )}
    </div>
  );
};

export default Question;

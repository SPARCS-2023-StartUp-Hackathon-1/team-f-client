import { useAnswerById } from '@/hooks/queries/useAnswerById';
import { questionAtomFamily, questionOrderAtom, tailQuestionIdAtomFamily } from '@/store/question';
import { ChangeEvent, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AIBubble } from '../common/AIBubble';
import { Button } from '../common/Button';
import { Chip } from '../common/Chip';
import { GNB } from '../common/GNB';
import { Icon } from '../common/Icon';
import { Input } from '../common/Input';
import { PageMark } from '../common/pageMark';
import { UserBubble } from '../common/UserBubble';
import TailQuestion from './TailQuestion';

interface QuestionProps {
  defaultQuestion: Question;
}

const Question = () => {
  const [order, setOrder] = useRecoilState(questionOrderAtom);
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
    setOrder(prev => prev + 1);
  };

  const handleTailAnswerButtonClick = () => {};

  return (
    <div className="h-full pb-[100px]">
      <div className="h-[64px] flex items-center">
        <PageMark pageNumber={order} isActive={true} />
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
      )}
    </div>
  );
};

export default Question;

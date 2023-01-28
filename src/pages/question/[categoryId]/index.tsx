import { questionAtomFamily, questionOrderAtom, tailQuestionIdAtomFamily } from '@/store/question';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Header } from '@/components/common/Header';
import Question from '@/components/Question';
import { useDefaultQuestionQuery } from '@/hooks/queries/useDefaultQuestionQuery';
import { useEffect } from 'react';
import { useMidCategoryByIdQuery } from '@/hooks/queries/useMidCategoryByIdQuery';
import { useRouter } from 'next/router';

const QuestionPage = () => {
  const router = useRouter();
  const midCategoryId = router?.query?.categoryId;
  const { data: midCategory, isSuccess: midCategoryIsSuccess } = useMidCategoryByIdQuery(
    Number(midCategoryId)
  );
  const { data: defaultQuestion, isSuccess: defaultQuestionIsSuccess } = useDefaultQuestionQuery(
    Number(midCategoryId)
  );
  const order = useRecoilValue(questionOrderAtom);
  const setQuestion = useSetRecoilState(questionAtomFamily(order));
  const setTailQuestionIds = useSetRecoilState(tailQuestionIdAtomFamily(order));
  useEffect(() => {
    if (defaultQuestionIsSuccess) {
      setQuestion(prev => ({
        ...prev,
        basicQuestion: { id: defaultQuestion.id, question: defaultQuestion.question },
      }));

      setTailQuestionIds([defaultQuestion.id]);
    }
  }, []);

  return (
    <div className="w-full">
      {midCategoryIsSuccess && <Header headerTitle={midCategory.name} />}
      <Question />
    </div>
  );
};

export default QuestionPage;

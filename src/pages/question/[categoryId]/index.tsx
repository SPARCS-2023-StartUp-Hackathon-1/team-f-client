import {
  questionAtomFamily,
  questionMarkAtom,
  questionOrderAtom,
  tailQuestionIdAtomFamily,
} from '@/store/question';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { Header } from '@/components/common/Header';
import Question from '@/components/Question';
import { useDefaultQuestionQuery } from '@/hooks/queries/useDefaultQuestionQuery';
import { useEffect } from 'react';
import { useMidCategoryByIdQuery } from '@/hooks/queries/useMidCategoryByIdQuery';
import { useRouter } from 'next/router';

type IParams = {
  categoryId: string;
};

export async function getServerSideProps({ params }: { params: IParams }) {
  const categoryId = params.categoryId;

  return {
    props: {
      categoryId,
    },
  };
}

const QuestionPage = ({ categoryId }: { categoryId: string }) => {
  const router = useRouter();
  const midCategoryId = categoryId;
  const { data: midCategory, isSuccess: midCategoryIsSuccess } = useMidCategoryByIdQuery(
    Number(midCategoryId)
  );
  const {
    data: defaultQuestion,
    isSuccess: defaultQuestionIsSuccess,
    refetch: defaultQuestionRefetch,
    isRefetching: defaultQuestionIsRefetching,
  } = useDefaultQuestionQuery(Number(midCategoryId));
  const order = useRecoilValue(questionOrderAtom);
  const mark = useRecoilValue(questionMarkAtom);
  const [question, setQuestion] = useRecoilState(questionAtomFamily(order));
  const setTailQuestionIds = useSetRecoilState(tailQuestionIdAtomFamily(order));

  useEffect(() => {
    if (mark === order) defaultQuestionRefetch();
  }, [order]);

  useEffect(() => {
    if (defaultQuestionIsSuccess) {
      setQuestion(prev => ({
        ...prev,
        basicQuestion: { id: defaultQuestion.id, question: defaultQuestion.question },
      }));

      setTailQuestionIds([defaultQuestion.id]);
    }
  }, [defaultQuestionIsSuccess, defaultQuestionIsRefetching]);

  return (
    <div className="w-full">
      {midCategoryIsSuccess && <Header headerTitle={midCategory.name} />}
      <Question />
    </div>
  );
};

export default QuestionPage;

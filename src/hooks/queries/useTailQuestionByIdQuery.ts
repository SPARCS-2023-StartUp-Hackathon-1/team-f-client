import { getTailQuestionById } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useTailQuestionById = (questionId: number) => {
  const TailQuestion = useQuery({
    queryKey: ['tailQuestion', questionId],
    queryFn: () => getTailQuestionById(questionId),
  });
  return TailQuestion;
};

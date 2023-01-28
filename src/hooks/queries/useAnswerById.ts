import { getAnswerById } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useAnswerById = (questionId: number) => {
  const defaultQuestion = useQuery({
    queryKey: ['answer', questionId],
    queryFn: () => getAnswerById(questionId),
    enabled: !!questionId,
  });
  return defaultQuestion;
};

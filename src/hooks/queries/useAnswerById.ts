import { getAnswerById } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useAnswerById = (questionId: number) => {
  const defaultQuestion = useQuery({
    queryKey: ['answer'],
    queryFn: () => getAnswerById(questionId),
  });
  return defaultQuestion;
};

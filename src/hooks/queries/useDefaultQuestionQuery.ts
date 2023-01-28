import { getDefaultQuestion } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useDefaultQuestionQuery = (midCategoryId: number) => {
  const defaultQuestion = useQuery({
    queryKey: ['defaultQuestion'],
    queryFn: () => getDefaultQuestion(midCategoryId),
    enabled: !!midCategoryId,
  });
  return defaultQuestion;
};

import { useQuery } from '@tanstack/react-query';

import { getDefaultQuestion } from '@/apis';

export const useDefaultQuestionQuery = (midCategoryId: number) => {
  const defaultQuestion = useQuery({
    queryKey: ['defaultQuestion'],
    queryFn: () => getDefaultQuestion(midCategoryId),
  });
  return defaultQuestion;
};

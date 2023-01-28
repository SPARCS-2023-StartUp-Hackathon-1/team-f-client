import { getMainCategories } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useMainCategoryQuery = () => {
  const mainCategoryQuery = useQuery({
    queryKey: ['mainCategories'],
    queryFn: getMainCategories,
  });
  return mainCategoryQuery;
};

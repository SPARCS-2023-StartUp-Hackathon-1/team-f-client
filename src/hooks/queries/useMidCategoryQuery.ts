import { getMidCategories } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useMidCategoryQuery = ({ id }: { id: string }) => {
  const midCategoryQuery = useQuery({
    queryKey: ['midCategories'],
    queryFn: () => getMidCategories({ id }),
  });
  return midCategoryQuery;
};

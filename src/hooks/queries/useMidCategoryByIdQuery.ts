import { getMidCategoryById } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useMidCategoryByIdQuery = (midCategoryId: number) => {
  const midCategoryByIdQuery = useQuery({
    queryKey: ['midCategoryById'],
    queryFn: () => getMidCategoryById(midCategoryId),
  });
  return midCategoryByIdQuery;
};

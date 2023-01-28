import axios from 'axios';

interface MainCategoryResponse<T = Record<string, unknown>> {
  categories: T;
}

interface MidCategoryResponse<T = Record<string, unknown>> {
  name: string;
  categories: T;
}

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export const getMainCategories = async () => {
  const {
    data: { categories },
  } = await axiosClient.get<MainCategoryResponse<Category[]>>('/categories/main');
  return categories;
};

export const getMidCategories = async ({ id }: { id: string }) => {
  const { data } = await axiosClient.get<MidCategoryResponse<MidCategory[]>>('/categories/mid', {
    params: { mainCategoryId: id },
  });
  return data;
};

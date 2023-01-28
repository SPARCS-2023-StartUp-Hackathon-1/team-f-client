import axios from 'axios';

interface CategoryResponse<T = Record<string, unknown>> {
  categories: T;
}

interface MidCategoryByIdResponse {
  id: number;
  name: string;
  imageUrl: string;
}

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export const getMainCategories = async () => {
  const {
    data: { categories },
  } = await axiosClient.get<CategoryResponse<Category[]>>('/categories/main');
  return categories;
};

export const getMidCategoryById = async (midCategoryId: number) => {
  const {
    data: { id, name, imageUrl },
  } = await axiosClient.get<MidCategoryByIdResponse>(`/categories/mid/${midCategoryId}`);
  return { id, name, imageUrl };
};

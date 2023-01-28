import axios from 'axios';

interface CategoryResponse<T = Record<string, unknown>> {
  categories: T;
}

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export const getMainCategories = async () => {
  const {
    data: { categories },
  } = await axiosClient.get<CategoryResponse<Category[]>>('/main');
  return categories;
};

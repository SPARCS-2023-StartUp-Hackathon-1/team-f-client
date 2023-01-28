import axios from 'axios';

interface CategoryResponse<T = Record<string, unknown>> {
  categories: T;
}
interface MidCategoryResponse<T = Record<string, unknown>> {
  name: string;
  categories: T;
}

interface MidCategoryByIdResponse {
  id: number;
  name: string;
  imageUrl: string;
}

interface DefaultQuestionResponse {
  id: number;
  question: string;
}

interface AnswerResponse {
  id: number;
  answer: string;
}

export const axiosClient = axios.create({
  baseURL: 'http://ec2-15-164-217-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

export const getMainCategories = async () => {
  const {
    data: { categories },
  } = await axiosClient.get<CategoryResponse<Category[]>>('/categories/main');
  return categories;
};

export const getMidCategories = async ({ id }: { id: string }) => {
  const { data } = await axiosClient.get<MidCategoryResponse<MidCategory[]>>('/categories/mid', {
    params: { mainCategoryId: id },
  });
  return data;
};

export const getMidCategoryById = async (midCategoryId: number) => {
  const {
    data: { id, name, imageUrl },
  } = await axiosClient.get<MidCategoryByIdResponse>(`/categories/mid/${midCategoryId}`);
  return { id, name, imageUrl };
};

export const getDefaultQuestion = async (midCategoryId: number) => {
  const {
    data: { id, question },
  } = await axiosClient.get<DefaultQuestionResponse>(`/questions?/midCategoryId=${midCategoryId}`);
  return { id, question };
};

export const getAnswerById = async (questionId: number) => {
  const {
    data: { id, answer },
  } = await axiosClient.get<AnswerResponse>(`/questions/${questionId}/answer`);
  return { id, answer };
};

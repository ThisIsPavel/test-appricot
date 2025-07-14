import { DEFAULT_API } from '@/constants';
import { IProduct } from '@/entities/product/model/types';

export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${DEFAULT_API}/products`);
  if (!response.ok) throw new Error('Что-то пошло не так');
  return response.json();
};

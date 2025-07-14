'use client';

import { useEffect, useState } from 'react';
import { IProduct } from '@/entities/product/model/types';
import { fetchProducts } from '../api/fetchProducts';

export const useGetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        console.log(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Что-то пошло не так');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, isLoading, error };
};

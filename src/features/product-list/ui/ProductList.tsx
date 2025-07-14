'use client';

import Link from 'next/link';
import { useGetProducts } from '../hooks/useGetProducts';
import Loader from '@/widgets/loader/ui/Loader';
import styles from './styles.module.css';
import Title from '@/shared/ui/Title/Title';
import Slider from '@/shared/ui/Slider/Slider';
import { Pagination } from './Pagination';
import { useState } from 'react';
import { ITEMS_PER_PAGE } from '@/constants';

export default function ProductList() {
  const { products, isLoading, error } = useGetProducts();
  const [currentPage, setCurrentPage] = useState(1);

  if (error) {
    return (
      <Title variant="h3" isError className="mt-50 text-center">
        {error}
      </Title>
    );
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isLoading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="mx-auto grid max-w-[1340px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="group dark:bg-primary w-full md:max-w-[250px] dark:text-white">
                <div className="relative h-[200px] w-full">
                  <Slider images={product.images} imageClass="h-[200px] w-full" />
                </div>
                <div className="my-5 px-4">
                  <Link
                    href={`/products/${product.slug}`}
                    className="group-hover:text-hover-text block w-full text-center text-lg font-bold"
                  >
                    {product.title}
                  </Link>
                  <p className={`${styles.textTruncate} text-primary dark:text-desc cursor-pointer`}>
                    {product.description}
                  </p>
                  <p className="font-bold">
                    Цена: <span className="">{product.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      )}
    </>
  );
}

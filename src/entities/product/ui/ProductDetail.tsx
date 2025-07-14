'use client';
import Slider from '@/shared/ui/Slider/Slider';
import { IProduct } from '../model/types';
import Title from '@/shared/ui/Title/Title';

interface Props {
  product: IProduct;
}

export default function ProductDetail({ product }: Props) {
  const { description, images, price, title, id } = product;
  return (
    <div className="flex h-[500px] w-full flex-wrap gap-8 py-15 md:h-[500px] md:flex-nowrap">
      <Slider images={images} imageClass="h-full w-full" className="h-full md:w-1/2" />
      <div className="flex flex-col justify-evenly md:w-1/2">
        <div>
          <Title variant="h2">{title}</Title>
          <p className="dark:text-desc">{description}</p>
        </div>
        <p className="my-5 max-w-[max-content] border-b-2 text-3xl font-bold dark:text-white">
          Цена: <span>{price}</span>
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

interface SliderProps {
  images: string[];
  imageClass?: string;
  className?: string;
}

export default function Slider({ images, imageClass, className }: SliderProps) {
  return (
    <Swiper
      spaceBetween={10}
      loop
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={className}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={`${imageClass} relative`}>
            <Image src={image} fill className="absolute" alt={`${index + 1} изображение`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

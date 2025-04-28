"use client";
import jwt from 'jsonwebtoken';
import LoadingForSwiper from './main_swiper/LoadingForSwiper';
import SwiperContent from './SwiperContent';
import { HP_SLIDER_API } from '@/app/utils/apis/home_page';

export default function SwiperMainBlogs() {

  const { data, isLoading } = HP_SLIDER_API();

  return (
    <>
    


      {
        isLoading ?
          <LoadingForSwiper />
          : <SwiperContent data={data} />
      }
    </>
  );
}


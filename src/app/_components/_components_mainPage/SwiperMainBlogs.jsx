"use client";
import jwt from 'jsonwebtoken';
import LoadingForSwiper from './main_swiper/LoadingForSwiper';
import SwiperContent from './SwiperContent';
import { HP_SLIDER_API } from '@/app/utils/apis/home_page';

export default function SwiperMainBlogs() {

  const { data, isLoading } = HP_SLIDER_API();

  return (
    <>
      <button
        className="bg-red-600"
        onClick={async () => {
          const token = window.localStorage.getItem('PruthatekINFO_token');

          if (!token) {
            console.log('No token found');
            return;
          }
          
          // Decode without verifying
          const decoded =  jwt.decode(token );

          if (!decoded) {
            console.log('Token is invalid');
          }

          const currentTime = Math.floor(Date.now() / 1000); // in seconds

          if (decoded.exp && decoded.exp < currentTime) {
            console.log('Token is expired');
          } else {
            console.log('Token is valid');
          }

          console.log('Decoded Token:', decoded);
        }}
      >
        Check Token
      </button>


      {
        isLoading ?
          <LoadingForSwiper />
          : <SwiperContent data={data} />
      }
    </>
  );
}


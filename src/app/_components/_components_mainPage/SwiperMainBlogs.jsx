  
 
import dynamic from 'next/dynamic';

const SwiperContent = dynamic(() => import('./SwiperContent') );

import LoadingForSwiper from './main_swiper/LoadingForSwiper';
import { Suspense } from 'react';
  
 
export default function SwiperMainBlogs() {
  
       
  return (
     <Suspense fallback={<LoadingForSwiper />}>
     <SwiperContent />
   </Suspense>
     
  );
}

  
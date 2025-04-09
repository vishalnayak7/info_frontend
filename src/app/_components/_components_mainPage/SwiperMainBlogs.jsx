'use client'

import { useQuery } from '@tanstack/react-query';
import LoadingForSwiper from './main_swiper/LoadingForSwiper';
import SwiperContent from './SwiperContent';
import { HP_SLIDER } from '@/app/utils/graphql/homepage_gql';
import { gqlClient } from '../Wrapper';



export default function SwiperMainBlogs() {


  const fetchSliderData = async () => gqlClient.request(HP_SLIDER);
  const { data, isLoading } = useQuery({
    queryKey: ["HP_SLIDER"],
    queryFn: fetchSliderData,
    staleTime: 1000 * 60 * 2, // Cache data for 2 minutes

  });
   
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


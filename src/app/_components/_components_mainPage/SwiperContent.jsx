'use client';

import MostPopular from "./MostPopular";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Swiper_Card from "./main_swiper/Swiper_Card";
import { useMemo, useState } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '../Wrapper'
import { HP_SLIDER } from '@/app/utils/graphql/homepage_gql'

function SwiperContent() {
     const fetchSliderData = async () => gqlClient.request(HP_SLIDER);
     const { data, isLoading } = useQuery({
          queryKey: ["HP_SLIDER"],
          queryFn: fetchSliderData,
          staleTime: 1000 * 60 * 2, // Cache data for 2 minutes
          suspense: true, // Enable Suspense
     });

     const [activeIndex, setActiveIndex] = useState(0);
     const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance

     
     const slides = useMemo(() => {
          return data?.HomePageSliderLeftSide?.map((_, index) => index) || [0];
     }, [data]);

     return (
          <div className='w-full md:w-[80%] mx-auto lg:w-full pb-16 flex flex-col lg:flex-row items-start gap-20 md:gap-8'>

               <div className='relative w-full lg:w-[70%]'>
                    <Swiper
                         grabCursor={true}
                         effect={'creative'}
                         loop={true}
                         autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                         }}
                         creativeEffect={{
                              prev: {
                                   shadow: true,
                                   translate: [0, 0, -400],
                              },
                              next: {
                                   translate: ['100%', 0, 0],
                              },
                         }}
                         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                         modules={[Autoplay, EffectCreative]}
                         className='h-[420px] md:h-auto md:aspect-[16/9] bg-transparent'
                         onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture Swiper instance
                    >
                         {data?.HomePageSliderLeftSide?.map((item, index) => (
                              <SwiperSlide key={index} className='w-full h-full'>
                                   <Swiper_Card data={item} />
                              </SwiperSlide>
                         ))}
                    </Swiper>
                         
                    {/* Custom Pagination */}
                    <div className="absolute z-[120] -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                         {slides.map((_, index) => (
                              <button   
                                   key={index}
                                   className={`h-2 md:h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-blue-500 dark:bg-yellowish-500 w-4 md:w-6 scale-125' : 'w-2 md:w-2.5 bg-blackish-200/50'}`}
                                   onClick={() => {
                                        if (swiperInstance) {
                                             swiperInstance.slideToLoop(index); // Move to selected slide
                                        }
                                   }}
                              />
                         ))}
                    </div>

               </div>
               <MostPopular data={data?.HomePageMostPopularBlogs} />
          </div>
     );
}

export default SwiperContent;

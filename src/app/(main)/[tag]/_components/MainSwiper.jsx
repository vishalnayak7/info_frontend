"use client"


import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import Single_card from './Swiper_comp/Single_card'
import { gqlClient } from '@/app/_components/Wrapper';
import { TP_SLIDER } from '@/app/utils/graphql/Tagpage_gql';
import { useQuery } from '@tanstack/react-query';


export default function MainSwiper({ tag }) {



     const fetchSliderData = async () => gqlClient.request(TP_SLIDER, {
          tag: String(tag).replace(/-/g, " ").toLowerCase()
               .split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ')
     });
     const { data, isLoading } = useQuery({
          queryKey: ["TP_SLIDER"],
          queryFn: fetchSliderData,
          staleTime: 1000 * 60 * 2, // Cache data for 2 minutes

     });



     const [activeIndex, setActiveIndex] = useState(0);
     const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance


     const slides = useMemo(() => {
          return data?.TagPageSliderLeftSide?.map((_, index) => index) || [0];
     }, [data]);

     return (
          <div className='  my-10  md:my-12 w-full relative'>
               {
                    isLoading || !data ?
                         <div className='  bg-gray-100 flex    flex-col lg:flex-row justify-between items-start  '>
                              <div className=' w-full lg:w-[50%]   rounded-t-3xl lg:rounded-tr-none  lg:rounded-l-3xl  aspect-[16/9] lg:aspect-[16/11] relative overflow-hidden'>

                              </div>

                              <div className=' w-full lg:w-[50%] group  rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl flex flex-col items-start justify-center    lg:aspect-[16/11]   '>
                              </div>

                         </div>
                         : <>

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
                                   className=' w-full'
                                   onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture Swiper instance
                              >

                                   {
                                        data?.TagPageSliderLeftSide?.map((item, index) => {
                                             return (

                                                  <SwiperSlide key={index} className=' bg-transparent '>
                                                       <Single_card data={item} />
                                                  </SwiperSlide>
                                             )
                                        })
                                   }

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
                         </>
               }
          </div>
     )
}


 
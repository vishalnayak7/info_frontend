"use client"


import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import Single_card from './Swiper_comp/Single_card'
export default function MainSwiper() {

     const [activeIndex, setActiveIndex] = useState(0);
     const slides = [0, 1, 2]; // Your slide data



     return (
          <div className='  my-10  md:my-12 w-full relative'>

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
                    className='w-full'
               >

                    {
                         [0, 1, 2].map((item, index) => {
                              return (

                                   <SwiperSlide key={index} className=' bg-transparent '>
                                        <Single_card />
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
                              className={` h-2 md:h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-blue-500 dark:bg-yellowish-500  w-4 md:w-6 scale-125' : ' w-2  md:w-2.5 bg-blackish-200/50'
                                   }`}
                              onClick={() => setActiveIndex(index)}
                         />
                    ))}
               </div>

          </div>
     )
}

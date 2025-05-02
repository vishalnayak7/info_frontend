"use client"

import Headings from '../_resusable_components/Headings'
import FourGridLoadingCard from '../_resusable_components/FourGridLoadingCard'
import FourGrideCard from '../_resusable_components/FourGrideCard'
import { hp_bar_three_likes_bar_api } from '@/app/utils/apis/home_page'

export default function HomePage_BarOne_LikedBlogs() {

     const { data, isLoading } = hp_bar_three_likes_bar_api();

     return (
          <>
               <div className=' '>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3 '>

                         <div className={' w-full pt-8'}>
                              <div className=' space-y-1 md:space-y-2 flex flex-row justify-start items-center gap-3'>
                                   {/* <div className=' size-3.5 dark:bg-yellowish-500 bg-blueish-500'></div> */}
                                   <h1 className=' text-blue-600 dark:text-yellowish-500 text-[26px] md:text-[28px] capitalize leading-[125%] font-extrabold font-manrope'>
                                        Most Loved Articles by Our Readers
                                   </h1>
                              </div>
                              <p className='  pt-2 text-blackish-200  dark:text-whiteish-700    font-manrope font-medium  leading-[125%] text-[14px] tracking-wide md:text-[17px]'>Stories That Captivate, Words That Inspire</p>
                         </div>

                    </div>

               </div>

               {/* // loading cards */}
               {
                    isLoading &&
                    <FourGridLoadingCard />
               }

               {
                    !isLoading && data?.HomePageHighestFiveBlogs_Likes_Bar.length != 0 &&

                    <section className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.HomePageHighestFiveBlogs_Likes_Bar?.map((item, index) => {
                                   return (
                                        <FourGrideCard data={item} key={index} />
                                   )
                              })
                         }
                    </section>

               }
          </>
     )
}

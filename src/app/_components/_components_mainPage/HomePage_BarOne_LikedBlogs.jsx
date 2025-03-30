'use client'

import Headings from '../_resusable_components/Headings'

import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '../Wrapper'
import { HP_BAR_THREE_LIKES_BAR } from '@/app/utils/graphql/homepage_gql'

import FourGridLoadingCard from '../_resusable_components/FourGridLoadingCard'
import FourGrideCard from '../_resusable_components/FourGrideCard'

export default function HomePage_BarOne_LikedBlogs() {

     const { data, isLoading, error } = useQuery({
          queryKey: ["HP_BAR_THREE_LIKES_BAR"],
          queryFn: () => gqlClient.request(HP_BAR_THREE_LIKES_BAR),
          staleTime: 1000 * 60 * 2,
     });
 
     return (
          <>
               <div className=' '>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3'>
                         <Headings title={'Loved By Readers'} subTitle={'Stories That Captivate, Words That Inspire'} />
                    </div>

               </div>

               {/* // loading cards */}
               {
                    isLoading &&
                    <FourGridLoadingCard />
               }

               {
                    !isLoading && data?.HomePageHighestFiveBlogs_Likes_Bar.length != 0 &&

                    <div className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.HomePageHighestFiveBlogs_Likes_Bar?.map((item, index) => {
                                   return (
                                        <FourGrideCard data={item} key={index} />
                                   )
                              })
                         }
                    </div>

               }
          </>
     )
}

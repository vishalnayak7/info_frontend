"use client"
 
import React from 'react'
import { BsStars } from "react-icons/bs";
 
 
import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '@/app/_components/Wrapper';
import From_following_card from './singleCards/From_following_card';
import Skeleton from '@/app/_components/_resusable_components/Skeleton';
import { GetTopBlogsByTopAuthor } from '@/app/utils/graphql/apis_gql';
// import LoadingUI from './LoadingUI';

export default function SponserdBlogs() {

     const { data, isLoading, error } = useQuery({
            queryKey: ["GetTopBlogsByTopAuthor"],
            queryFn: () => gqlClient.request(GetTopBlogsByTopAuthor),
       });
   
     return (
          <div className='   pb-10 mt-10 md:mt-0    border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>
               <div className=' '>
                    <div className='  flex flex-row justify-start items-center gap-3'>

                         <button className='  text-blueish-500  dark:text-yellowish-500  text-[20px] md:text-[22px] flex flex-row items-center gap-2 capitalize font-extrabold font-manrope'>
                              <BsStars className='   text-blueish-500  dark:text-yellowish-500 text-[26px] ' />  Sponsored Articles
                         </button>
                    </div>

               </div>

               {isLoading ?
                    <LoadingUI />
                    :
                    <div className=' w-full space-y-8 mt-8'>
                         {
                              data?.getTopBlogsByTopAuthor?.map((item, index) => {
                                   return (
                                        <From_following_card key={index} data={item} />
                                   )
                              })
                         }
                    </div>
               }



               {/* <div className=' w-full space-y-8 mt-8'>
                    {
                         [0, 1, 2].map((item, index) => {
                              return (
                                   <Sponser_card key={index} />
                              )
                         })
                    }
               </div> */}


               {/* <div className=' w-full space-y-8 mt-8'>
                    {
                         [0, 1, 2].map((item, index) => {
                              return (
                                   <div
                                        key={index}

                                        className=' group w-full '
                                   >
                                        <Skeleton cls={'  rounded-md  aspect-[16/9]'} />


                                        <div className=' pt-3 md:pt-4'>
                                             <Skeleton cls={' rounded-md  w-full h-6'} />
                                             <Skeleton cls={' rounded-md mt-3  w-[80%] h-6'} />

                                             <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>


                                                  <Skeleton cls={'  rounded-full   size-[37px] md:size-[40px]'}>

                                                  </Skeleton>


                                                  <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col space-y-1 '>

                                                       <Skeleton cls={' rounded-md   w-1/2 h-5'} />
                                                       <Skeleton cls={' rounded-md   w-1/2 h-3'} />


                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div> */}

          </div>
     )
}



function LoadingUI() {

     return (
          <div className=' w-full space-y-8 mt-8'>
               {[0, 1, 2, 3].map((item, index) => {
                    return (
                         <div
                              key={index}
                              className='  w-full '
                         >
                              <Skeleton cls={' rounded-md aspect-[16/9]'} />

                              <div className=' pt-3 md:pt-4'>

                                   <Skeleton cls={' rounded-md  w-full h-6'} />
                                   <Skeleton cls={' rounded-md mt-3  w-[80%] h-6'} />


                                   <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>


                                        <Skeleton cls={'  rounded-full   size-[37px] md:size-[40px]'}>

                                        </Skeleton>


                                        <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col space-y-1 '>

                                             <Skeleton cls={' rounded-md   w-1/2 h-6'} />



                                        </div>
                                   </div>
                              </div>
                         </div>
                    )
               })}
          </div>
     )

}
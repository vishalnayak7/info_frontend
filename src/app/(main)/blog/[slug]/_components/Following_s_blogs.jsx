"use client"
import Headings from '@/app/_components/_resusable_components/Headings'

import React from 'react'
import From_following_card from './singleCards/From_following_card'
import Skeleton from '@/app/_components/_resusable_components/Skeleton'
import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '@/app/_components/Wrapper'
import {  GetTopBlogsByTopAuthor } from '@/app/utils/graphql/apis_gql'

export default function Following_s_blogs() {


     const { data, isLoading, error } = useQuery({
          queryKey: ["GetTopBlogsByTopAuthor"],
          queryFn: () => gqlClient.request(GetTopBlogsByTopAuthor),
     });




     return (
          <div className=' border-t border-dashed  pb-10    border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

               <Headings title={'Best from Author'} subTitle={'Best Articles from Top Authors'} clx=' mt-10' />

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
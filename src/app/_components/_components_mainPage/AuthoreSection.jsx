"use client"

import Headings from '../_resusable_components/Headings'
import Author_card from './Author_card'
import { GET_TOP_AUTHOR_OF_WEEK } from '@/app/utils/graphql/apis_gql';
import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '../Wrapper';
import Skeleton from '../_resusable_components/Skeleton';

export default function AuthoreSection() {

     const { data, isLoading, error } = useQuery({
          queryKey: ["GET_TOP_AUTHOR_OF_WEEK"],
          queryFn: () => gqlClient.request(GET_TOP_AUTHOR_OF_WEEK),
          staleTime: 1000 * 60 * 2,
     });



     return (
          <>
               <Headings title={'Featured Voices'} subTitle={'Top class authors of the week.'} clx=' border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50 pt-10 my-16 w-full md:w-[80%]  mx-auto lg:w-full' />



               {
                    isLoading ? <div className='  w-full md:w-[80%] mx-auto lg:w-full grid  grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8'>
                         {
                              [0, 2, 23].map(e => (<div key={e} className=' group '>

                                   <Skeleton cls={'relative rounded-full h-[100px] aspect-square '} />
                                   

                                   <div className=' pt-3 space-y-2'>
                                        <Skeleton cls={'relative rounded-md w-full h-6 aspect-square '} />
                                        <Skeleton cls={'relative rounded-md w-full h-4 aspect-square '} />
                                        <Skeleton cls={'relative rounded-md w-1/2 h-4 aspect-square '} />
                                        <Skeleton cls={'relative rounded-md w-full h-4 aspect-square '} />
                                        <Skeleton cls={'relative rounded-md w-1/2 h-4 aspect-square '} />
                                        <Skeleton cls={'relative rounded-md w-full h-4 aspect-square '} />


                                   </div>

                                   <div className=' flex flex-row justify-start items-center gap-3 pt-4'>
                                        <Skeleton cls={'relative rounded-full w-[100px] h-10    aspect-square '} />
                                        <Skeleton cls={'relative rounded-full w-[100px] h-10    aspect-square '} />
                                   </div>
                              </div>))
                         }

                    </div>
                         :
                         (
                              error ? <p>Error: {error.message} </p>
                                   :
                                   <section className='  w-full md:w-[80%] mx-auto lg:w-full grid  grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12'>
                                        {
                                             data?.getTopAuthorOfWeek?.map((item, index) => {
                                                  return (
                                                       <Author_card key={index} data={item} />
                                                  )
                                             })
                                        }
                                   </section>
                         )
               }



          </>
     )
}

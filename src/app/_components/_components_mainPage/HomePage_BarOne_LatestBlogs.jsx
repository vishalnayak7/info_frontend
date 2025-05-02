'use client'

import Headings from '../_resusable_components/Headings'
import { useQuery } from '@tanstack/react-query'
import { gqlClient } from '../Wrapper'
import { HP_BAR_ONE_LATEST_BLOGS  } from '@/app/utils/graphql/homepage_gql'
import FourGridLoadingCard from '../_resusable_components/FourGridLoadingCard'
import FourGrideCard from '../_resusable_components/FourGrideCard'

export default function HomePage_BarOne_LatestBlogs() {


     const { data, isLoading, error } = useQuery({
          queryKey: ["HP_BAR_ONE_LATEST_BLOGS"],
          queryFn: () => gqlClient.request(HP_BAR_ONE_LATEST_BLOGS),
          staleTime: 1000 * 60 * 2,
     });


     return (
          <>
               <div className=' border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50 pt-10 my-16'>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3'>
                         <Headings title={'Trending Articles'} subTitle={'Hot Topics, Fresh Insights, Must-Read Stories'} />

                    </div>

               </div>


               {/* // loading cards */}
               {
                    isLoading &&
                    <FourGridLoadingCard />
               }

               {
                    !isLoading && data?.HomePageLatestBlogsBar.length != 0 &&

                    <section className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.HomePageLatestBlogsBar?.map((item, index) => {
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

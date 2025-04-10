import Headings from '@/app/_components/_resusable_components/Headings'

import Reccomended_card from './singleCards/Reccomended_card'
import From_following_card from './singleCards/From_following_card'
import Skeleton from '@/app/_components/_resusable_components/Skeleton'
import { useQuery } from '@tanstack/react-query';

import { gqlClient } from '@/app/_components/Wrapper';
import { GetRelatedBlogsBySlug } from '@/app/utils/graphql/apis_gql';

export default function RecommendedBlogs({ slug }) {

     const { data, isLoading, error } = useQuery({
          queryKey: ["GetRelatedBlogsBySlug"],
          queryFn: () => gqlClient.request(GetRelatedBlogsBySlug, { slug: slug }),
          enabled: !!slug,
     });

     

     return (
          <div className=' border-t border-dashed      border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

               <Headings title={' Related Articles'} subTitle={'Discover more articles you may like.'} clx=' mt-10' />



               {isLoading ?
                    <LoadingUI />
                    :
                    <div className=' w-full   grid mt-12  grid-cols-1  md:grid-cols-1 xl:grid-cols-2 gap-10 md:gap-8 xl:gap-10 xl:gap-y-12'>
                         {
                              data?.getRelatedBlogsBySlug?.map((item, index) => {
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
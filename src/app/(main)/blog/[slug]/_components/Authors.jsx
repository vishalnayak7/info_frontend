 
import Headings from '@/app/_components/_resusable_components/Headings'
import Author_card from './singleCards/Author_card'
 
import { TopAuthorAPi } from '@/app/utils/apis/blog_page';

export default function Authors() {

     const { data, isLoading, error } = TopAuthorAPi();


     return (
          <div className=' border-t border-dashed  pb-10     border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

               <Headings title={'Top Writers'} subTitle={'Some top of the line writers.'} clx=' mt-10' />


               {
                    isLoading ? <p className=' text-black text-xl'>Loading...</p>
                         :
                         (
                              error ? <p>Error: {error.message} </p>
                                   :
                                   <div className=' w-full space-y-6 mt-8'>
                                        {
                                             data?.getTopAuthorOfWeek?.map((item, index) => {
                                                  return (
                                                       <Author_card key={index} data={item} />
                                                  )
                                             })
                                        }
                                   </div>
                         )
               }


          </div>
     )
}


import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ExploreNow({ data }) {
     return (
          <div className='  mt-16 md:mt-6 lg:mt-20 flex  flex-col lg:flex-row justify-start items-start  gap-3 md:gap-5'>
               <p className=' text-nowrap  pt-3  text-blackish-400 dark:text-whiteish-600  text-[16px] font-manrope font-medium tracking-wide'>
                    Explore More
               </p>

               <div className=' flex flex-row  gap-2  md:gap-4 flex-wrap  md:mt-4'>
                    {/* hover:bg-blueish-500 */}
                    {
                         data?.map((item, index) => {
                              return (
                                   <Link
                                        key={index}
                                        href={item.href}
                                        className=' border  md:border-2 dark:hover:text-blueish-400  hover:text-blueish-500  hover:border-blueish-400 duration-200 dark:border-whiteish-500/60 dark:text-whiteish-500 dark:hover:border-blueish-500 border-blackish-500/80 rounded-lg px-2.5 md:px-4  py-1 md:py-1.5  text-blackish-500 items-center gap-1 md:gap-2 flex flex-row justify-center relative group text-[13px] md:text-[16px] '
                                   >
                                        <span>  {String(item.heading).split(' ')[0]}</span>
                                        <div className="   overflow-hidden rounded-lg   relative">
                                             <ArrowUpRight className=" size-[15px] md:size-[18px] group-hover:-translate-y-5  stroke-[1.2px] md:stroke-[1.6px]  group-hover:translate-x-5 duration-300" />

                                             <ArrowUpRight className=" size-[15px] md:size-[18px] absolute group-hover:-translate-y-0  stroke-[1.2px] md:stroke-[1.6px]   translate-y-5 -translate-x-5 top-0 left-0 group-hover:translate-x-0 duration-300" />

                                        </div>
                                   </Link>
                              )
                         })
                    }

               </div>


          </div>
     )
}

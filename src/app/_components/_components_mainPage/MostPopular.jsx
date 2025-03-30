 
import Link from 'next/link'
import React from 'react'
import IImage from '../_resusable_components/IImage'

export default function MostPopular({ data }) {
     return (
          <div className='  w-full  lg:w-[30%] scrollBar lg:h-[340px] overflow-auto xl:h-[550px]  '>
               <div className=' text-blueish-500 leading-none dark:text-yellowish-500 text-[24px] font-bold font-manrope  '>
                    <span>Most Popular</span>

               </div>

               <div className=' mt-5 space-y-3'>
                    {
                         data?.map((item, index) => {
                              return (
                                   <Link key={index} href={'/blog/'+item?.slug} className=' flex flex-row justify-between border-blackish-200 items-start border-b border-dashed pb-3  group'>
                                        <div className=' w-[75%] '>

                                             <h3 className=' group-hover:underline underline-offset-2 line-clamp-2 leading-[130%] font-manrope  dark:text-whiteish-400 group-hover:text-blueish-500 dark:group-hover:text-yellowish-500 text-[15px] md:text-[17px] font-bold md:font-semibold'>{item.title}
                                             </h3>

                                             <h4 className=' dark:text-whiteish-500 mt-2 leading-[130%] font-manrope text-blackish-600 text-[13px] md:text-[15px] font-semibold text-grayish-500 space-x-1.5'>
                                                  <span className=' font-normal tracking-wide'>by</span> {item?.authorDetails?.username}</h4>
                                        </div>


                                        <div className=' relative overflow-hidden h-[63px] md:h-[70px] w-[90px] '>

                                             <div className=' z-20  absolute -bottom-1 -left-1 md:-left-0.5 text-white    font-extrabold font-manrope text-[35px] leading-none'>
                                                  {index >= 10 ? index + 1 : `0${index + 1}`}
                                             </div>

                                             <IImage url={item?.thumbnail} quality={15}   alt={item?.title} />
                                        </div>
                                   </Link>
                              )
                         })
                    }
               </div>

          </div>
     )
}

let temp = [
     {
          title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis enim animi",
          author: "Pruthatek.com",
          thumbnail: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080"
     },
     {
          title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis enim animi",
          author: "Pruthatek.com",
          thumbnail: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080"
     },
     {
          title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis enim animi",
          author: "Pruthatek.com",
          thumbnail: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080"
     },
     {
          title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis enim animi",
          author: "Pruthatek.com",
          thumbnail: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080"
     },
     {
          title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis enim animi",
          author: "Pruthatek.com",
          thumbnail: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080"
     },
]
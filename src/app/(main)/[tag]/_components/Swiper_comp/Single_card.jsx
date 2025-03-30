import AuthorHoverCard from '@/app/_components/_resusable_components/AuthorHoverCard'
import { ArrowUpRight, Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Single_card() {
     return (
          <div className=' flex    flex-col lg:flex-row justify-between items-start   '>
               <div className=' w-full lg:w-[50%]   rounded-t-3xl lg:rounded-tr-none  lg:rounded-l-3xl  aspect-[16/9] lg:aspect-[16/11] relative overflow-hidden'>
                    <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt={'dsfd'} fill className=' object-cover' />

               </div>
               <div className=' w-full lg:w-[50%] group  rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl flex flex-col items-start justify-center  dark:bg-blackish-500 bg-whiteish-500   lg:aspect-[16/11] px-6  xl:px-10  py-4 md:py-8  lg:py-0 '>


                    <div className=" flex  mb-5 mt-3  xl:mb-6 flex-row flex-wrap gap-2">
                         {
                              ["react", "node", "ai"].map((item, index) => {
                                   return (
                                        <Link key={index} href={item} className=" flex flex-row items-center gap-1  text-[13px] md:text-[16px] capitalize   md:px-3 px-1.5 py-0.5 pb-0.5 md:pb-1 leading-[120%] rounded-md bg-whiteish-300 dark:bg-blackish-400 dark:text-whiteish-600   ">
                                             <span>{item}</span>
                                             <ArrowUpRight className=" size-[12px] md:size-[14px] " strokeWidth={1.5} />
                                        </Link>
                                   )
                              })
                         }

                    </div>


                    <Link href={'/blog/this-is-a-test'} className=' line-clamp-3 font-manrope dark:font-semibold font-extrabold   text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500  text-[20px] md:text-[20px] xl:text-[26px]    leading-[125%] md:leading-[125%] xl:leading-[150%] group-hover:underline group-hover:underline-offset-2  mt-4 md:mt-0'>
                         Lorem ipsum dolor sit amet, consectetur ssdf  adipisicing elit. Blanditiis, quisquam.
                    </Link>

                    <h3 className=' tracking-[-0.03rem] mt-4 md:mt-3 xl:mt-5    font-sourceSarif leading-[135%] text-[16px] md:text-[18px] xl:text-[19px] line-clamp-3  md:line-clamp-2  text-blackish-200 dark:text-whiteish-700'>
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi, eveniet illum unde sunt cum!
                    </h3>

                    <div className=' flex mt-8 md:mt-6 lg:mt-4 xl:mt-16 flex-row justify-between gap-3 items-center'>
                         <div className=' bg-blackish-200/20 rounded-full overflow-hidden relative  size-[37px] md:size-[40px]'>
                              <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt='sdf' fill={true} className=' object-cover' />
                         </div>
                         <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col pt-1'>

                              <Link href={'/'} className=' font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] relative md:text-[16px] text-blackish-400 dark:text-whiteish-300/90 font-manrope  group/author'>Pruthatek.info
 
                              </Link>

                              <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300  md:text-[14px] font-manrope gap-1'>
                                   <span>2 days ago</span>
                                   <Dot className=" " />
                                   <span>6 min Read</span>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}

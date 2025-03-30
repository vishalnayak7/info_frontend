import AuthorHoverCard from '@/app/_components/_resusable_components/AuthorHoverCard'
import Headings from '@/app/_components/_resusable_components/Headings'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsStars } from 'react-icons/bs'

export default function SponserdBlogs() {
     return (
          <>
               <div className='  mt-16'>
                    
                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3'>
                         <Headings title={'Widely Explored'} subTitle={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, architecto?'} />
                         <div className='  text-blueish-500  dark:text-yellowish-500  text-[15px] md:text-[16px] flex flex-row items-center gap-2 capitalize font-medium font-manrope'>
                              <BsStars className='   text-blueish-500  dark:text-yellowish-500 text-[17px] md:text-[20px] ' />  Sponsored Articles
                         </div>
                    </div>

               </div>
               <div className='  w-full   mx-auto lg:w-full grid  mt-2 md:mt-4 lg:mt-10 mb-12   grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-10 relative z-[100px] md:gap-8 xl:gap-6'>
                    {
                         [0, 1, 2, 3].map((item, index) => {
                              return (
                                   <div
                                        key={index}
                                        className=' group w-full '
                                   >
                                        <div className={`  rounded-md  aspect-[16/9] relative overflow-hidden   `}>
                                             <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt={'dsfd'} fill className=' object-cover' />

                                        </div>

                                        <div className=' pt-3 md:pt-4  '>
                                             <Link href={'/blog/this-is-a-test'} className=' line-clamp-3 font-manrope dark:font-semibold font-bold   text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500  text-[20px] md:text-[20px] dark:tracking-normal tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2 '>
                                                  Lorem ipsum dolor sit amet, consectetur ssdf  adipisicing elit. Blanditiis, quisquam.
                                             </Link>

                                             <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>
                                                  <div className=' bg-blackish-200/20 rounded-full overflow-hidden relative  size-[37px] md:size-[40px]'>
                                                       <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt='sdf' fill={true} className=' object-cover' />
                                                  </div>
                                                  <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col pt-1'>

                                                       <Link href={'/'} className=' font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] relative md:text-[16px] text-blackish-400 dark:text-whiteish-300/90 font-manrope  group/author'>Pruthatek.info

                                                            <AuthorHoverCard id={'1'}
                                                                 clx={' w-[300px] h-[200px] z-[110]'} />

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
                         })
                    }
               </div>

          </>
     )
}

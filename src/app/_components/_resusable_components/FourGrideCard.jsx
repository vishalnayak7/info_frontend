import React from 'react'
import IImage from './IImage'
import Link from 'next/link'
import Image from 'next/image'
import AuthorHoverCard from './AuthorHoverCard'
import { Dot } from 'lucide-react'
import { timeAgo } from '@/app/utils/BasicFunctions'

export default function FourGrideCard({ data, isShowAuthorPart = true }) {
     return (
          <Link href={'/blog/' + data?.slug}
               className=' group w-full  '
          >
               <div className='  rounded-md  aspect-[16/9] relative overflow-hidden'>
                    {
                         data?.thumbnail &&
                         <IImage url={data?.thumbnail} alt={data?.title} />
                    }
               </div>

               <div className=' pt-3 md:pt-4 flex flex-col justify-between h-[140px] md:h-[145px] items-start  '>
                    <Link href={'/blog/' + data?.slug} className=' line-clamp-3 font-manrope dark:font-semibold font-bold   text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500  text-[20px] md:text-[20px] dark:tracking-normal tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2 '>
                         {data?.title}
                    </Link>

                    {
                         isShowAuthorPart &&

                         <div className=' flex   flex-row justify-between gap-3 w-full items-center'>
                              <div className=' bg-blackish-200/20 rounded-full aspect-square  overflow-hidden relative  w-[37px] md:w-[40px]'>

                                   {data?.authorDetails?.avatar && (
                                        <Image
                                             quality={5}
                                             placeholder="blur"
                                             blurDataURL={data?.authorDetails.avatar}
                                             src={data?.authorDetails.avatar}
                                             alt={data?.authorDetails?.username ?? 'Article Image'}
                                             fill
                                             className="object-cover"
                                        />
                                   )}

                              </div>
                              <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col pt-1'>

                                   <Link href={'/profile/' + data?.authorDetails?.slug} className=' font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] relative md:text-[16px] text-blackish-400 dark:text-whiteish-300/90 font-manrope  group/author'>
                                        {data?.authorDetails?.username}

                                        <AuthorHoverCard data={data?.authorDetails} id={'1'}
                                             clx={' w-[300px] h-[200px] z-[110]'} />

                                   </Link>

                                   <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300  md:text-[14px] font-manrope gap-1'>
                                        <span>{timeAgo(data?.createdAt)}</span>
                                        <Dot className=" " />
                                        <span>{data?.timeRequired ? data?.timeRequired : '3'} min read</span>
                                   </div>

                              </div>
                         </div>


                    }
               </div>
          </Link>
     )
}

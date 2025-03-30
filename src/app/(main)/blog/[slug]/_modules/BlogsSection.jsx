import Skeleton from '@/app/_components/_resusable_components/Skeleton'
import { ArrowUpRight, ChevronRight, Dot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import AuthorSection from '../_components/AuthorSection'
import Image from 'next/image'
import ContentRender from '../_components/ContentRender'
import Accordian from '../_components/Accordian'
import RelatedBlogs_Section from './RelatedBlogs_Section'

export default function BlogsSection({ data, isLoading, error, slug }) {
     return (
          <div className=" w-full lg:w-[60%] ">

               {
                    isLoading && <Loading />
               }
               {
                    !isLoading && data &&
                    <>

                         <div className=" flex flex-row  font-medium capitalize font-manrope items-center flex-wrap justify-start text-blackish-600 dark:text-whiteish-700 gap-1 md:gap-2  text-[13px] md:text-[14px]">

                              <Link href={'/'} className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Home</Link>
                              <ChevronRight className=" size-[16px] md:size-[18px]" />
                              <Link href={'/blog'} className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Blog</Link>
                              <ChevronRight className=" size-[16px] md:size-[18px]" />

                              <Link href={'/blog/' + slug} className="   hover:underline hover:underline-offset-2  md:inline-block hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(data?.getBlogBySlug?.title).length > 80 ? String(data?.getBlogBySlug?.title).slice(0, 80) + "..." : data?.getBlogBySlug?.title}</Link>

                              <Link href={'/blog/' + slug} className="   hover:underline hover:underline-offset-2 md:hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(data?.getBlogBySlug?.title).length > 30 ? String(data?.getBlogBySlug?.title).slice(0, 30) + "..." : data?.getBlogBySlug?.title}</Link>

                         </div>

                         <div className=" flex mt-8 flex-row flex-wrap gap-2">
                              {
                                   data?.getBlogBySlug?.tags?.map((item, index) => {
                                        return (
                                             <Link key={index} href={`/${item?.name}`} className=" flex flex-row items-center gap-1  text-[13px] md:text-[16px] capitalize   md:px-3 px-1.5 py-0.5 pb-0.5 md:pb-1 leading-[120%] rounded-md bg-whiteish-500 dark:bg-blackish-400 dark:text-whiteish-600   ">
                                                  <span>{item?.name}</span>
                                                  <ArrowUpRight className=" size-[12px] md:size-[14px] " strokeWidth={1.5} />
                                             </Link>
                                        )
                                   })
                              }

                         </div>

                         <div className=" mt-5">
                              <h1 className="  text-[23px] leading-[130%] tracking-[-0.03rem] md:tracking-normal md:leading-normal md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold font-manrope capitalize   dark:text-whiteish-300 text-blackish-600">
                                   {data?.getBlogBySlug?.title}</h1>
 
                              <h2 className=" mt-2 h_p ">{data?.getBlogBySlug?.subTitle}</h2>

                              {/* //author */}
                              <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>
                                   <AuthorSection data={data?.getBlogBySlug} />
                              </div>

                         </div>
                         <div className=" relative aspect-[16/9] mt-10 rounded-lg overflow-hidden">
                              {
                                   data?.getBlogBySlug?.thumbnail &&
                                   <Image placeholder='blur' blurDataURL={data?.getBlogBySlug?.thumbnail} src={data?.getBlogBySlug?.thumbnail} alt={slug} fill={true} className=" object-cover" />
                              }
                         </div>

                         <div className="  space-y-2">
                              <ContentRender content={data?.getBlogBySlug?.content} />
                         </div>

                         {data?.getBlogBySlug?.accordians.map((item, index) => {
                              return <Accordian data={item} key={index} />
                         })}

                         <div className=" my-10  dark:text-whiteish-700 text-blackish-300  w-full flex justify-center items-center gap-0.5">
                              <Dot className="  " />
                              <Dot className="  " />
                              <Dot className="  " />

                         </div>
                    </>
               }

               {/* // for mobil and tabs */}
               <RelatedBlogs_Section />
          </div>
     )
}



function Loading() {

     return (
          <>

               <div className=" flex flex-row  font-medium capitalize font-manrope items-center flex-wrap justify-start text-blackish-600 dark:text-whiteish-700 gap-1 md:gap-2  text-[13px] md:text-[14px]">
                    <Skeleton cls={' rounded-md h-4 w-[50%]'} />
               </div>

               <div className=" flex mt-8 flex-row flex-wrap gap-2">

                    <Skeleton cls={' rounded-md h-6 w-[80px]'} />
                    <Skeleton cls={' rounded-md h-6 w-[80px]'} />
                    <Skeleton cls={' rounded-md h-6 w-[80px]'} />

               </div>

               <div className=" mt-5">

                    <Skeleton cls={' rounded-md h-10 w-full'} />
                    <Skeleton cls={' rounded-md mt-2  h-5 w-full'} />
                    <Skeleton cls={' rounded-md mt-3  h-5 w-3/4'} />
                    <Skeleton cls={' rounded-md mt-2  h-5 w-1/2'} />
                    <Skeleton cls={' rounded-md mt-2  h-5 w-1/3'} />


                    <div className=' flex mt-2 md:mt-4 flex-row justify-between gap-3 items-center'>
                         <Skeleton cls={'  rounded-full   size-[44px] md:size-[42px]'}>
                         </Skeleton>
                         <div className=" flex flex-col gap-1 w-full">
                              <Skeleton cls={'  w-1/3 h-4'} />
                              <Skeleton cls={'  w-1/3 h-3'} />
                         </div>
                    </div>

               </div>

               <Skeleton cls={' aspect-[16/9] mt-10 rounded-lg'} />
               <div className="  mt-10 space-y-2">

                    <Skeleton cls={' rounded-md   w-full h-6'} />
                    <Skeleton cls={' rounded-md   w-3/4 h-6'} />
                    <Skeleton cls={' rounded-md   w-full h-6'} />
                    <Skeleton cls={' rounded-md   w-1/2 h-6'} />
                    <Skeleton cls={' rounded-md   w-3/4 h-6'} />
                    <Skeleton cls={' rounded-md   w-1/2 h-6'} />
                    <Skeleton cls={' rounded-md   w-1/3 h-6'} />


               </div>

               <div className=" my-10  dark:text-whiteish-700 text-blackish-300  w-full flex justify-center items-center gap-0.5">
                    <Dot className="  " />
                    <Dot className="  " />
                    <Dot className="  " />

               </div>

          </>
     )
}
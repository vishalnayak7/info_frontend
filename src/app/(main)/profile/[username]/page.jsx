"use client"

import AuthorHoverCard from "@/app/_components/_resusable_components/AuthorHoverCard"
import FourGridLoadingCard from "@/app/_components/_resusable_components/FourGridLoadingCard"
import IImage from "@/app/_components/_resusable_components/IImage"
import Skeleton from "@/app/_components/_resusable_components/Skeleton"
import { useBlogsByUserSlug, useUserBySlug } from "@/app/utils/apis/Profile_page"
import { GET_USER_BY_SLUG } from "@/app/utils/graphql/profile_gql"
import { Pagination } from "@mantine/core"
import { ChevronRight, Dot } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function page() {


  const { username } = useParams();
  const [page, setPage] = useState(1);
  const limit = 16;

  const { data: user, isLoading: userLoading } = useUserBySlug(username);
  const { data: blogsData, isLoading: blogsLoading } = useBlogsByUserSlug(username, page, limit);
  const blogs = blogsData?.blog || [];
  const totalPages = blogsData?.totalPages || 1;



  return (
    <div className=" max-w-screen-2xl   gap-10 lg:gap-28  py-7 flex flex-col lg:flex-row justify-start items-start  w-[87%] md:w-[70%] lg:w-[85%] mx-auto">


      <div className=" w-full   ">

      
        <div className=" flex flex-row  font-medium capitalize font-manrope items-center flex-wrap justify-start text-blackish-600 dark:text-whiteish-700 gap-1 md:gap-2  text-[13px] md:text-[14px]">

          <Link href={'/'} className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Home</Link>
          <ChevronRight className=" size-[16px] md:size-[18px]" />
          <p className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Profile</p>

          <ChevronRight className=" size-[16px] md:size-[18px]" />

          <Link href={'/profile/' + username} className="   hover:underline hover:underline-offset-2  md:inline-block hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(user?.username).length > 80 ? String(user?.username).slice(0, 80) + "..." : user?.username}</Link>

          <Link href={'/blog/' + username} className="   hover:underline hover:underline-offset-2 md:hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(user?.username).length > 30 ? String(user?.username).slice(0, 30) + "..." : user?.username}</Link>

        </div>


        {userLoading ?
          <>
            <div className=" flex mt-8   flex-row  justify-start  items-start gap-16">
              <div className="  overflow-hidden rounded-lg  w-[20%] aspect-square  relative">
                <Skeleton cls={' w-full h-full'} />
              </div>
              <div className=" pt-2 space-y-4  w-[80%]">

                <Skeleton cls={' w-1/2 h-12 '} />

                <Skeleton cls={' w-full h-6 '} />
                <Skeleton cls={' w-full h-6 '} />
                <Skeleton cls={' w-3/2 h-6 '} />
                <Skeleton cls={' w-1/2 h-6 '} />

              </div>

            </div>

            <div className=" flex mt-8 gap-1  bg-whiteish-500 dark:bg-blackish-400 flex-row  justify-start  items-start h-[220px]  rounded-lg">
              <Skeleton cls={" w-[25%] h-full    "} />
              <Skeleton cls={" w-[25%] h-full   "} />
              <Skeleton cls={" w-[25%] h-full   "} />
              <Skeleton cls={" w-[25%] h-full   "} />

            </div>
          </> :
          <>
            <div className=" flex mt-8   flex-row  justify-start  items-start gap-16">
              <div className="  overflow-hidden rounded-lg  w-[20%] aspect-square  relative">

                <IImage url={user?.avatar} alt={username} />

              </div>
              <div className=" pt-2  w-[80%]">
                <h1 className=" text-[44px] text-blueish-500 dark:text-yellowish-500 font-Bebas tracking-wider font-[900] capitalize">{username}</h1>
                <p className="  text-[19px] font-medium font-manrope text-blackish-600 dark:text-whiteish-700">{user?.bio}</p>
              </div>

            </div>

            {/* <div className=" flex mt-8  bg-whiteish-500 dark:bg-blackish-400 flex-row  justify-start  items-start h-[220px]  rounded-lg">
              <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700  ">a</div>
              <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700 ">a</div>
              <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700 ">a</div>
              <div className=" w-[25%] h-full ">a</div>
            </div> */}
          </>
        }



        <div className=" flex pt-[120px]    flex-row  justify-start  items-start gap-16">
          <h3 className=" leading-[30px] font-[900] capitalize text-[44px] tracking-wider font-Bebas">Latest From <span className=" text-blueish-500 dark:text-yellowish-500">{username}</span></h3>
        </div>


        {blogsLoading ? (
          <FourGridLoadingCard num={8} />
        ) : (
          <div className="w-full mx-auto lg:w-full grid mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8 xl:gap-6">
            {blogs.map((item, index) => (
              <Link
                href={'/blog/' + item?.slug}
                key={index}
                className='group w-full'
              >
                <div className='rounded-md aspect-[16/9] relative overflow-hidden'>
                  <IImage alt={item?.title} url={item?.thumbnail} quality={80} />
                </div>
                <div className='pt-3 md:pt-4'>
                  <Link href={'/blog/' + item?.slug} className='line-clamp-3 font-manrope dark:font-semibold font-bold text-blackish-600 group-hover:text-blueish-500 dark:text-whiteish-500 dark:group-hover:text-yellowish-500 text-[20px] md:text-[20px] dark:tracking-normal tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2'>
                    {item?.title}
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        )}


        <div className="flex w-full justify-center items-center my-8 mt-16">
          <Pagination
            total={totalPages}
            value={page}
            onChange={setPage}
            color="rgb(31, 31, 29)"
            size="lg"
          />
        </div>


      </div>
    </div>
  )
}

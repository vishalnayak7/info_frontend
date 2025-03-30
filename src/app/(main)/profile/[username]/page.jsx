"use client"

import AuthorHoverCard from "@/app/_components/_resusable_components/AuthorHoverCard"
import IImage from "@/app/_components/_resusable_components/IImage"
import { Pagination } from "@mantine/core"
import { ChevronRight, Dot } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function page() {

  const { username } = useParams()

  return (
    <div className=" max-w-screen-2xl   gap-10 lg:gap-28  py-7 flex flex-col lg:flex-row justify-start items-start  w-[87%] md:w-[70%] lg:w-[85%] mx-auto">


      <div className=" w-full   ">


        <div className=" flex flex-row  font-medium capitalize font-manrope items-center flex-wrap justify-start text-blackish-600 dark:text-whiteish-700 gap-1 md:gap-2  text-[13px] md:text-[14px]">

          <Link href={'/'} className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Home</Link>
          <ChevronRight className=" size-[16px] md:size-[18px]" />
          <Link href={'/blog'} className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Blog</Link>
          <ChevronRight className=" size-[16px] md:size-[18px]" />

          <Link href={'/profile/' + username} className="   hover:underline hover:underline-offset-2  md:inline-block hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(username).length > 80 ? String(username).slice(0, 80) + "..." : username}</Link>

          <Link href={'/blog/' + username} className="   hover:underline hover:underline-offset-2 md:hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(username).length > 30 ? String(username).slice(0, 30) + "..." : username}</Link>

        </div>

        <div className=" flex mt-8   flex-row  justify-start  items-start gap-16">
          <div className="  overflow-hidden rounded-lg  w-[20%] aspect-square  relative">
            <IImage url={'/images/error_image.png'} alt={username} />
          </div>
          <div className=" pt-2  w-[80%]">
            <h1 className=" text-[44px] text-blueish-500 dark:text-yellowish-500 font-Bebas tracking-wider font-[900] capitalize">{username}</h1>
            <p className="  text-[19px] font-medium font-manrope text-blackish-600 dark:text-whiteish-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nemo hic, minus culpa excepturi eaque delectus totam eius est laudantium quae repudiandae odio libero quod exercitationem itaque doloremque, enim aspernatur incidunt tenetur. Suscipit architecto animi tempora accusamus quod in voluptas facere, a quaerat quo magnam. Porro provident repellat sed perferendis.</p>
          </div>

        </div>

        <div className=" flex mt-8  bg-whiteish-500 dark:bg-blackish-400 flex-row  justify-start  items-start h-[220px]  rounded-lg">
          <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700  ">a</div>
          <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700 ">a</div>
          <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700 ">a</div>
          <div className=" w-[25%] h-full ">a</div>
        </div>

        <div className=" flex mt-8   flex-row  justify-start  items-start gap-16">
          <h3 className=" leading-[30px] font-[900] capitalize text-[44px] tracking-wider font-Bebas">Latest From <span className=" text-blueish-500 dark:text-yellowish-500">{username}</span></h3>
        </div>
        <div className=" flex mt-6   flex-row  justify-start  items-center gap-8">
          <span className=" font-manrope text-[18px] font-medium">Filter By</span>

          <button className="select-none font-nunito  bg-whiteish-500 font-medium  text-[12px] md:text-[16px]  rounded-full  px-2.5 md:px-4 py-1.5 text-blackish-700">Latest</button>

          <button className="select-none font-nunito  bg-whiteish-500 font-medium  text-[12px] md:text-[16px]  rounded-full  px-2.5 md:px-4 py-1.5 text-blackish-700">All</button>
        </div>

        <div className='   w-full  mx-auto lg:w-full grid mt-16  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8 xl:gap-6'>
          {
            [0, 1, 2, 3].map((item, index) => {
              return (
                <div
                  key={index}
                  className=' group w-full '
                >
                  <div className='  rounded-md  aspect-[16/9] relative overflow-hidden'>
                    <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt={'dsfd'} fill className=' object-cover' />

                  </div>
                  <div className=' pt-3 md:pt-4'>
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
        <div className=" flex w-full justify-center items-center my-8 mt-16">
          <Pagination total={10} color="rgb(31, 31, 29)" size="lg" />
        </div>
      </div>
    </div>
  )
}

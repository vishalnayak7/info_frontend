import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Author_card({data}) {

     return (
          <Link href={`/profile/${data?.username}`} className=' group '>
               <div className=' relative h-[100px] aspect-square '>
                    <Image fill placeholder='blur' blurDataURL={data?.avatar ? data.avatar : null} src={data?.avatar ? data.avatar : null} alt='temp' className=' object-cover rounded-full' />
               </div>

               <div className=' pt-3'>

                    <h3 className=' group-hover:underline  underline-offset-2 font-manrope text-[24px] tracking-[0.02rem] font-bold dark:text-whiteish-400 group-hover:text-blueish-500 dark:group-hover:text-yellowish-500'>{data?.username}</h3>
                    <p className=' h_p line-clamp-3'>{ data?.bio}</p>

               </div>

               <div className=' flex flex-row justify-start items-center gap-3 pt-4'>

                    <button className=" text-[13px] md:text-[15px] font-manrope bg-blackish-500  dark:bg-whiteish-400/20 text-white font-normal px-3.5  py-1.5 md:py-2 rounded-full tracking-[0.03rem]  border border-blackish-500 dark:border-whiteish-400/0 ">
                         <span className='  '>Follow</span>
                    </button>

                    {/* <button className=" text-[13px] md:text-[15px] font-manrope   dark:border-whiteish-400/30  dark:text-whiteish-400/90  text-blackish-700 border border-blackish-700 font-normal px-3.5  py-1.5 md:py-2 flex flex-row items-center gap-2 group rounded-full tracking-[0.03rem]  ">
                         <span className='  '>Explore</span>
                         <div className="   overflow-hidden rounded-lg   relative">
                              <ArrowUpRight size={20} strokeWidth={1.3} className=" group-hover:-translate-y-5 group-hover:translate-x-5 duration-300" />

                              <ArrowUpRight size={20} strokeWidth={1.3} className=" absolute group-hover:-translate-y-0  translate-y-5 -translate-x-5 top-0 left-0 group-hover:translate-x-0 duration-300" />

                         </div>
                    </button> */}
               </div>
          </Link>
     )
}

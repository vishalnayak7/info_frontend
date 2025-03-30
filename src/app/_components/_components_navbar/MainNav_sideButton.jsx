'use client'

import { AlignJustify, Search, X } from 'lucide-react'
import React from 'react'
import DarkMode from '../DarkMode'
import Link from 'next/link'
import { Avatar } from '@mantine/core'
import { useSelector } from 'react-redux'

export default function MainNav_sideButton({ showSearch, setShowSearch }) {

     const { is_user_logged_in, user_data } = useSelector(state => state.HomeSlice)

     return (
          <div className=" flex justify-center items-center gap-3 md:gap-8">

               <div className={` ${showSearch ? "" : "  w-[25px] md:w-[40px]"}     overflow-hidden  hidden lg:block `}>
                    <div className=" relative  md:px-3 translate-x-[0%] w-[250px] flex flex-row justify-center items-center gap-3 overflow-hidden  ">

                         {
                              !showSearch ? <Search size={29} onClick={() => setShowSearch(!showSearch)} className=" cursor-pointer text-white/90   " absoluteStrokeWidth strokeWidth={1.5} /> :
                                   <X size={26} onClick={() => setShowSearch(!showSearch)} className=" cursor-pointer text-white/90   " absoluteStrokeWidth strokeWidth={1.5} />

                         }


                         <input placeholder="Search" type="text" className=" text-[14px] text-black/90 md:text-[16px]  font-nunito  placeholder:text-black/90  outline-none rounded-full px-4 py-1.5  block bg-[#fffffff5]  w-full" />
                    </div>
               </div>


               <DarkMode />

               {
                    is_user_logged_in ?
                         <>
                              <Avatar   name={user_data.username || ''} src={user_data?.avatar || null} />
                         </> :
                         <>
                              <Link href={'/login'} className="  hidden lg:block select-none font-nunito  bg-whiteish-400 font-medium  text-[12px] md:text-[16px]  rounded-full  px-2.5 md:px-4 py-1.5 text-blackish-700">
                                   Get Started
                              </Link>
                         </>
               }




               <AlignJustify size={26} className="  lg:hidden cursor-pointer text-white/90   " absoluteStrokeWidth strokeWidth={1.5} />
               
          </div>
     )
}

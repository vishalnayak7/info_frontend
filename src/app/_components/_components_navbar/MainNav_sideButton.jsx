'use client'

import { AlignJustify, Search, X } from 'lucide-react'
import React from 'react'
import DarkMode from '../DarkMode'
import Link from 'next/link'
import { Avatar } from '@mantine/core'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'

export default function MainNav_sideButton({ showSearch, setShowSearch }) {

     const { is_user_logged_in, user_data } = useSelector(state => state.HomeSlice)

     return (
          <div className=" flex justify-center items-center gap-3 md:gap-8">

               <div className={` ${showSearch ? "" : "  w-[25px] md:w-[40px]"}       hidden lg:block `}>
                    <div className=" relative    flex flex-row justify-center items-center gap-3   ">
                    
                         {
                              !showSearch ? <Search size={22} onClick={() => setShowSearch(!showSearch)} className=" cursor-pointer text-white/90   " absoluteStrokeWidth strokeWidth={1.5} /> :
                                   <X size={26} onClick={() => setShowSearch(!showSearch)} className=" cursor-pointer text-white/90   " absoluteStrokeWidth strokeWidth={1.5} />

                         }


                    </div>
               </div>

               { showSearch &&
                    
                    <SearchBar />
               }

               <DarkMode />

               {
                    is_user_logged_in ?
                         <>
                              <Avatar name={user_data.username || ''} src={user_data?.avatar || null} />
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

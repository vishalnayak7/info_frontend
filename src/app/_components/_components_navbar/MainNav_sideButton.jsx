'use client'

import { AlignJustify, Bookmark, Grid2x2Plus, PenTool, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import DarkMode from '../DarkMode'
import Link from 'next/link'
import { Avatar } from '@mantine/core'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import { MdOutlineClose } from "react-icons/md";

export default function MainNav_sideButton({ showSearch, setShowSearch }) {

     const { is_user_logged_in, user_data } = useSelector(state => state.HomeSlice)
     const [isOpen, setisOpen] = useState(false);
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

               {showSearch &&

                    <SearchBar />
               }

               <DarkMode />

               {
                    is_user_logged_in ?
                         <>
                              <div className=' relative'>

                                   <button   onBlur={() => { setisOpen(false) }} className={` absolute top-0 -right-1 rounded-2xl  bg-white shadow-lg  ${isOpen ? " scale-y-100    opacity-100" : " opacity-0 scale-y-0   "} duration-150  ease-in z-50 w-[300px] px-4 py-3  text-black origin-top-right flex flex-col justify-between`}>
                                        <div className=' w-full  flex justify-between border-b border-blackish-200/40 pb-3 items-center'>
                                             <div className='  flex flex-row items-center gap-3'>

                                                  <Avatar
                                                       styles={{
                                                            root: {
                                                                 width: '35px',
                                                                 height: '35px',
                                                                 borderRadius: "14px"
                                                            }
                                                       }}
                                                       variant='outline'
                                                       name={user_data.username || ''} src={user_data?.avatar || null} />
                                                  <div className=' '>
                                                       <p className=' font-manrope font-semibold tracking-wide text-[14px]'>{user_data.username}</p>
                                                       <p className=' text-start font-manrope tracking-wide text-blueish-500 dark:text-yellow-500 text-[13px]'>{user_data.accountType}</p>
                                                  </div>
                                             </div>
                                             <div className='  p-1.5' onClick={() => { setisOpen(false) }}>
                                                  <MdOutlineClose className=' text-xl' />
                                             </div>

                                        </div>
                                        <div className=' w-full flex flex-col justify-between h-full  font-inter  pt-3'>
                                             <div className=' w-full space-y-0 '>

                                                  <Link onClick={() => { setisOpen(false) }} href={'/bookmarked'} className=' w-full hover:border-blackish-100 border border-transparent py-2 hover:bg-blackish-100/20 rounded-lg  flex gap-3 p-1  items-center'>
                                                       <Bookmark size={21} strokeWidth={1.4} />
                                                       Bookmarked</Link>
                                                  <Link onClick={() => { setisOpen(false) }} href={'/dashboard'} className=' w-full hover:border-blackish-100 border border-transparent py-2 hover:bg-blackish-100/20 rounded-lg  flex gap-3 p-1  items-center'>
                                                       <Grid2x2Plus size={20} strokeWidth={1.4} />
                                                       Dashboard</Link>
                                                  <Link onClick={() => { setisOpen(false) }} href={'/dashboard'} className=' w-full hover:border-blackish-100 border border-transparent py-2 hover:bg-blackish-100/20 rounded-lg flex gap-3 p-1  items-center'>
                                                       <PenTool size={21} strokeWidth={1.4} />
                                                       Write Artical</Link>
                                             </div>

                                             <button className=' w-full bg-red-500  rounded-lg py-2 text-white'>Logout</button>

                                        </div>
                                   </button>
                                                       

                                   <Avatar
                                        onClick={() => { setisOpen(true) }}
                                        styles={{
                                             root: {
                                                  width: '35px',
                                                  height: '35px',
                                                  borderRadius: "14px"
                                             }
                                        }}
                                        name={user_data.username || ''} src={user_data?.avatar || null} />

                              </div>

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

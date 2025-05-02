import { Bell, SlidersHorizontal } from '@phosphor-icons/react/dist/ssr'

export default function Navbar() {
     return (
          <div className=' flex   flex-row justify-end items-center p-3'>

               <button className='   px-1'>
                    <Bell size={30} weight="regular" />
               </button>

               <div className=' w-[1px] h-6 mx-4 bg-blackish-200/30'>
               </div>

               <button className='   px-1'>
                    <SlidersHorizontal size={31} weight="regular" />
               </button>


               <div className=' w-[1px] h-6 mx-4 bg-blackish-200/30'>
               </div>
               
               <div className=''>

               </div>

          </div>
     )
}



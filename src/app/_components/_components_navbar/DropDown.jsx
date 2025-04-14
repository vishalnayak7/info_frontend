
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


export default function DropDown({ setIsOpen, isOpen, dropData, handleMouseLeave ,isLoading}) {



     return (

          <div onMouseLeave={handleMouseLeave} className={`  absolute ${isOpen ? 'translate-y-0 ' : 'translate-y-[-140%]  '}  overflow-hidden duration-300  text-blackish-600 bg-whiteish-500 z-50   py-6  w-full  h-[350px] `} >
               {
                    isLoading ? <></> :

                         <div className="    max-w-screen-2xl  w-[87%] md:w-[85%]  flex flex-row justify-between items-start duration-100 z-50 left-0   mx-auto ">

                              <div className=" flex flex-col  w-[25%] ">

                                   <div className=" pl-1">
                                        <h2 className=" text-[26px] font-bold font-manrope">{dropData?.name}</h2>
                                        <p className=" font-semibold leading-[125%]  text-black/60 text-[16px] font-manrope mt-1">{dropData?.discription}</p>
                                   </div>

                                   <div className=" mt-8">
                                        <Link href={String(dropData.href)} className="select-none font-nunito  bg-[#30302e] font-medium group  text-[14px] md:text-[16px] w-[65%]  flex justify-center items-center gap-2 rounded-full px-4 py-2 text-[#ffffff]"> <span>Explore More</span>
                                             <div className="   overflow-hidden rounded-lg   relative">
                                                  <ArrowUpRight size={20} className=" group-hover:-translate-y-5 group-hover:translate-x-5 duration-300" />

                                                  <ArrowUpRight size={20} className=" absolute group-hover:-translate-y-0  translate-y-5 -translate-x-5 top-0 left-0 group-hover:translate-x-0 duration-300" />

                                             </div>
                                        </Link>
                                   </div>

                              </div>
                              <div className=" w-[65%]  grid grid-cols-2 gap-12 ">

                                   {
                                        dropData?.data?.map((item, index) => {
                                             return (
                                                  <div key={index} className=" space-y-4">
                                                       <h2 className=" text-[26px] font-bold font-manrope mb-1">{item?.name}</h2>

                                                       {
                                                            item?.blogs?.map((b, i) => {
                                                                 return (
                                                                      <div key={i} className=" w-full  leading-[110%] relative flex justify-between flex-row">
                                                                           <Link href={"/blog/" + b.slug} className="font-semibold hover:underline hover:underline-offset-2 line-clamp-2  w-[93%]   text-black/60 text-[16px] font-manrope ">
                                                                                {b.title}
                                                                           </Link>
                                                                           <ArrowUpRight size={20} className="" />
                                                                      </div>
                                                                 )
                                                            })
                                                       }


                                                  </div>
                                             )
                                        })
                                   }


                              </div>
                         </div>
               }
          </div >
     )
}

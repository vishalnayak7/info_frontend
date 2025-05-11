"use client"

import FourGrideCard from "@/app/_components/_resusable_components/FourGrideCard";
import FourGridLoadingCard from "@/app/_components/_resusable_components/FourGridLoadingCard";
import Headings from "@/app/_components/_resusable_components/Headings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";



export default function page() {


     const { lib } = useParams();  
     const { data, isLoading } = useQuery({
          queryKey: [lib + "-lib"],
          queryFn: async () => await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/lib/blog/${lib}`).then(res => res.json()),
          enabled: true,
     });

     console.log(data?.data);
     console.log(isLoading);

 
     return (
          <div className=" p-4">

               <Headings title={data?.data?.title} subTitle='' />
               {
                    isLoading &&
                    <FourGridLoadingCard />
               }
               
               {
                    !isLoading && data?.data?.blogs?.length != 0 &&

                    <section className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.data?.blogs?.map((item, index) => {
                                   return (
                                        <FourGrideCard data={item} key={index} isShowAuthorPart={false} />
                                   )
                              })
                         }
                    </section>

               }

          </div>
     )
}
// const data = [
//      {
//           id: 1,
//           img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//           title: "Library Name",
//           author: "Pruthatek.info",
//      },
//      {
//           id: 1,
//           img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//           title: "Library Name",
//           author: "Pruthatek.info",
//      },
//      {
//           id: 1,
//           img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//           title: "Library Name",
//           author: "Pruthatek.info",
//      },
//      {
//           id: 1,
//           img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//           title: "Library Name",
//           author: "Pruthatek.info",
//      },
// ]
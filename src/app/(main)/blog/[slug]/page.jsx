'use client'


import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { BLOG_BY_SLUG } from "@/app/utils/graphql/apis_gql";
import { gqlClient } from "@/app/_components/Wrapper";
 
import BlogsSection from "./_modules/BlogsSection";
import RightSide_Section from "./_modules/RightSide_Section";

export default function page() {

     const { slug } = useParams();
     const { data, isLoading, error } = useQuery({
          queryKey: ["blogBySlug"],
          queryFn: () => gqlClient.request(BLOG_BY_SLUG,{slug}),
          enabled: !!slug,
        });
        
     return (
          <div className=" w-full  ">

               <div className=" max-w-screen-2xl   gap-10 lg:gap-28  py-7 flex flex-col lg:flex-row justify-start items-start  w-[87%] md:w-[70%] lg:w-[85%] mx-auto">
                         
                    <BlogsSection data={data} isLoading={isLoading} error={error} slug={slug}/>
                    <RightSide_Section data={data} isLoading={isLoading} error={error}/>
               </div>
          </div >
     )
}
 

// location of blog - blog - slug
 
// tags
// blogs
// author + follow
// advertisement in left
// pols
// accordian


// sponserd blogs
// recommendaded blogs (10) ...
// authors(3) ...
// your following authors's blog (3)
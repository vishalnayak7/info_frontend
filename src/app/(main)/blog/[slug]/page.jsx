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

const charactersList = [
     {
          id: 'bender',
          image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
          label: 'Bender Bending Rodríguez',
          description: 'Fascinated with cooking, though has no sense of taste',
          content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
     },

     {
          id: 'carol',
          image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
          label: 'Carol Miller',
          description: 'One of the richest people on Earth',
          content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
     },

     {
          id: 'homer',
          image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
          label: 'Homer Simpson',
          description: 'Overweight, lazy, and often ignorant',
          content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
     },
];


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
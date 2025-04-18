"use client"
import Headings from '@/app/_components/_resusable_components/Headings';
 
import { useParams } from 'next/navigation';
 
import ExploreNow from './_components/ExploreNow';
 
import MainSwiper from './_components/MainSwiper';
import SponserdBlogs from './_components/SponserdBlogs';
import LatestBlogsByTag from './_components/LatestBlogsByTag';

// Tags data moved outside the component
const Tags_data = [
     { href: "/Trending", heading: "What's Hot Right Now", discription: "Start exploring the latest news on pruthatek.info. Stay updated with the most trending topics." },
     { href: "/AI", heading: "Artificial Intelligence Insights", discription: "Discover breakthroughs, innovations, and trends in AI shaping the future." },
     { href: "/Entertainment", heading: "Entertainment Buzz", discription: "Catch up on movies, shows, music, and everything fun happening in the entertainment world." },
     { href: "/Tech", heading: "Tech Innovations & Updates", discription: "Stay ahead with the latest tech trends, gadgets, and industry news." },
     { href: "/Education", heading: "Learn & Grow", discription: "Find valuable resources, insights, and news about education and learning trends." },
     { href: "/Money", heading: "Finance & Wealth", discription: "Get the latest on investments, personal finance, and money management." },
     { href: "/Home", heading: "Smart Living", discription: "Discover ideas, trends, and innovations to make your home a better place." },
     { href: "/Wellness", heading: "Health & Wellbeing", discription: "Explore wellness tips, fitness trends, and health insights for a better lifestyle." },
     { href: "/HomeInternet", heading: "Connectivity & Networks", discription: "Stay informed about broadband, internet services, and smart home connectivity." },
     { href: "/Deals", heading: "Best Deals & Discounts", discription: "Find the latest offers, discounts, and deals to save big on your favorite products." },
     { href: "/GiftGuide", heading: "Ultimate Gift Guide", discription: "Find the perfect gift ideas for every occasion, curated just for you." },
     { href: "/CoverStories", heading: "In-Depth Cover Stories", discription: "Read exclusive stories and deep dives into trending topics." },
     { href: "/More", heading: "Explore More Topics", discription: "Dive into additional categories and discover new stories." }
];

export default function Page() {
     const { tag } = useParams();

     return (  
          <div className="w-full">
               <div className="max-w-screen-2xl gap-10 lg:gap-28 py-10 md:py-16 w-[87%] md:w-[70%] lg:w-[85%] mx-auto">
                    <Headings clx=" " title={String(tag).toLocaleLowerCase().replace(/-/g, " ")} subTitle={""} />
                         
                    <MainSwiper tag={tag} />

                    <ExploreNow data={Tags_data} />

                    <LatestBlogsByTag tag={tag}/>
                    <SponserdBlogs tag={tag}/>
               </div>
          </div>
     );
}

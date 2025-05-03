import dynamic from "next/dynamic";

const SwiperMainBlogs = dynamic(() => import("../_components/_components_mainPage/SwiperMainBlogs"));
const HomePage_BarOne_LikedBlogs = dynamic(() => import("../_components/_components_mainPage/HomePage_BarOne_LikedBlogs"));
const HomePage_BarOne_ViewBased = dynamic(() => import("../_components/_components_mainPage/HomePage_BarOne_ViewBased"));
const HomePage_BarOne_LatestBlogs = dynamic(() => import("../_components/_components_mainPage/HomePage_BarOne_LatestBlogs"));
const AuthoreSection = dynamic(() => import("../_components/_components_mainPage/AuthoreSection"));
const SponserdBlogsHome = dynamic(() => import("../_components/_components_mainPage/SponserdBlogsHome"));


export default async function Home() {

  // const value = useSelector((state) => state.HomeSlice)
  // const dispatch = useDispatch()



  return (
    <div className=" w-full  ">

      <div className=" max-w-screen-2xl   py-10  md:py-16   w-[87%] md:w-[85%] mx-auto">

        <SwiperMainBlogs />
        {/* 
        <Categoryvise_blogs />
        */}

        <HomePage_BarOne_LikedBlogs />
        <HomePage_BarOne_ViewBased />
        <HomePage_BarOne_LatestBlogs />
        <AuthoreSection />
        <SponserdBlogsHome />



      </div>
    </div>
  );
}

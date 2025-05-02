import AuthoreSection from "../_components/_components_mainPage/AuthoreSection";
import HomePage_BarOne_LatestBlogs from "../_components/_components_mainPage/HomePage_BarOne_LatestBlogs";
import HomePage_BarOne_LikedBlogs from "../_components/_components_mainPage/HomePage_BarOne_LikedBlogs";
import HomePage_BarOne_ViewBased from "../_components/_components_mainPage/HomePage_BarOne_ViewBased";
import SponserdBlogsHome from "../_components/_components_mainPage/SponserdBlogsHome";
import SwiperMainBlogs from "../_components/_components_mainPage/SwiperMainBlogs";


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

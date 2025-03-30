 
import SponserdBlogs from '../_components/SponserdBlogs'
import Authors from '../_components/Authors'
import Following_s_blogs from '../_components/Following_s_blogs'

export default function RightSide_Section({ data, isLoading, error }) {
     return (
          <div className=" w-full lg:w-[40%]  lg:pl-10">

               {/* // for desktops */}

               {
                    typeof window !== "undefined" && window?.innerWidth > 880 ? <>
                         <SponserdBlogs />
                         <Authors />
                         <Following_s_blogs />
                    </> : ""

               }

          </div>
     )
}

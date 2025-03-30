 
import Authors from '../_components/Authors'
import Following_s_blogs from '../_components/Following_s_blogs'
import RecommendedBlogs from '../_components/RecommendedBlogs'
import SponserdBlogs from '../_components/SponserdBlogs'
 

export default function RelatedBlogs_Section() {
     return (
          <>
               {
                    typeof window !== "undefined" && window?.innerWidth > 880 ? "" :
                         <>
                              <SponserdBlogs />
                              <Authors />
                              <Following_s_blogs />
                         </>

               }
               <RecommendedBlogs />
          </>
     )
}

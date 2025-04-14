
import Authors from '../_components/Authors'
import Following_s_blogs from '../_components/Following_s_blogs'
import RecommendedBlogs from '../_components/RecommendedBlogs'
import SponserdBlogs from '../_components/SponserdBlogs'


export default function RelatedBlogs_Section({ slug }) {
     return (
          <>
               {
                    typeof window !== "undefined" && window?.innerWidth > 880 ? <>
     
                         <RecommendedBlogs slug={slug} />
                    </> :
                         <>
                              <SponserdBlogs />
                              <RecommendedBlogs slug={slug} />
                              <Authors />
                              <Following_s_blogs />
                         </>

               }
          </>
     )
}



export default async function sitemap() {
     // Fetch dynamic blog posts from Appwrite
     const blogDocs = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/getStaticBlogs`, {
          method: "GET",
     }).then((data) => data.json());


     const tagsDocs = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/getStaticTags`, {
          method: "GET",
     }).then((data) => data.json());



     // Static pages     
     const staticPages = [
          { url: `https://pruthatek.info/`, lastModified: new Date().toISOString(), priority: 1 },
          { url: `https://pruthatek.info/blog`, lastModified: new Date().toISOString(), priority: 1 },
          { url: `https://pruthatek.info/login`, lastModified: new Date().toISOString(), priority: 1 },
          { url: `https://pruthatek.info/profile/PruthaTek.info`, lastModified: new Date().toISOString(), priority: 1 },
          { url: `https://pruthatek.info/register`, lastModified: new Date().toISOString(), priority: 1 },

     ];


     // Dynamic blog URLs
     const blogPages = blogDocs.map((post) => {
          // Check if publishedAt is a valid date
          const publishedAt = new Date(post.createdAt);
          const isValidDate = !isNaN(publishedAt.getTime()); // Ensure the date is valid

          return {
               url: `https://pruthatek.info/blog/${post.slug}`,
               lastModified: isValidDate ? publishedAt.toISOString() : new Date().toISOString(),
               priority: 0.8
          };
     });


     // Dynamic Tags URLs
     const TagPages = tagsDocs.map((post) => {
          // Check if publishedAt is a valid date
          const publishedAt = new Date(post.createdAt);
          const isValidDate = !isNaN(publishedAt.getTime()); // Ensure the date is valid

          return {
               url: `https://pruthatek.info/${String(post?.name).toLowerCase().replace(/ /g, '-')}`,
               lastModified: isValidDate ? publishedAt.toISOString() : new Date().toISOString(),
               priority: 0.8
          };
     });



     return [...staticPages, ...blogPages, ...TagPages];
}

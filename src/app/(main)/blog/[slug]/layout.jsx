export async function generateMetadata({ params }) {
     // Format the title: remove hyphens and capitalize each word

     const formatTitle = (slug) =>
          slug
               .split('-')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');

     const title = formatTitle((await params).slug);

     // Fetch product details (ensure `product` is defined)
     // const product = await fetchProductDetails(params.slug); // You need to define this function

     return {
          title: `${title} | PruthaTek.info`,
          description: "Read this insightful blog post.",
          openGraph: {
               title: `${title} | PruthaTek.info`,
               description: "Read this insightful blog post.",
               url: `https://pruthatek.info/blog/${(await params).slug}`,
               siteName: "PruthaTek.info",
           
               type: "article",
               publishedTime: new Date().toISOString(),
               authors: ["PruthaTek"],
          },
     };
}

export default function Layout({ children }) {
     return <>{children}</>;
}

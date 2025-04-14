import { Nunito, Source_Serif_4, Manrope, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import '@mantine/notifications/styles.css';

import Wrapper from "./_components/Wrapper";




// Font Imports 
const source4 = Source_Serif_4({ variable: "--font-SourceSarif4", subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bebas = Bebas_Neue({ variable: "--font-Bebas", subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "PruthaTek.info | Tech News, Tutorials & Insights",
  description: "PruthaTek.info is your go-to hub for the latest in tech, software development, and industry insights. Discover tutorials, tips, and trending news to stay ahead in the digital world.",
  keywords: [
  
    "artificial intelligence",
    "machine learning",
    "deep learning",
    "AI trends",
    "AI tools",
    "AI in healthcare",
    "AI in finance",
    "AI in education",
    "machine learning projects",
    "AI tutorials",
    "web development",
    "software development",
    "full stack development",
    "front-end frameworks",
    "back-end technologies",
    "JavaScript tutorials",
    "Python for web",
    "Node.js backend",
    "React.js guide",
    "web development roadmap",
    "cybersecurity",
    "data privacy",
    "ethical hacking",
    "network security",
    "VPN recommendations",
    "cyber threat intelligence",
    "IT support services",
    "endpoint protection",
    "secure coding practices",
    "cybersecurity certifications",
    "latest tech gadgets",
    "smartphone reviews",
    "best laptops for developers",
    "wearable tech",
    "wireless earbuds comparison",
    "budget tech under 5000",
    "Android vs iOS",
    "tech gadgets 2025",
    "smart home devices",
    "VR headsets",
    "cloud computing",
    "SaaS tools for developers",
    "AWS tutorials",
    "Google Cloud guide",
    "Azure for beginners",
    "cloud deployment strategies",
    "DevOps and cloud",
    "serverless architecture",
    "cloud cost optimization",
    "SaaS trends 2025",
    "latest tech news",
    "technology trends 2025",
    "emerging tech startups",
    "tech IPOs",
    "tech company earnings",
    "green tech innovations",
    "automation in tech",
    "sustainable technology",
    "digital transformation",
    "remote work tech",
    "blockchain technology",
    "Web3 explained",
    "quantum computing",
    "Internet of Things (IoT)",
    "5G vs Wi-Fi 6",
    "smart cities",
    "augmented reality",
    "virtual reality in gaming",
    "edge computing",
    "AI-powered robotics",

    "coding tutorials",
    "programming languages to learn",
    "DSA for interviews",
    "computer science roadmap",
    "best online coding courses",
    "tech career paths",
    "developer resume tips",
    "cracking coding interviews",
    "Git & GitHub basics",
    "system design prep",

    "tech blogging tips",
    "how to start a tech blog",
    "SEO for developers",
    "blogging with Next.js",
    "monetizing tech content",
    "developer productivity tools",
    "code snippets for blogs",
    "newsletter for tech blogs",
    "trending repositories GitHub",
    "developer tools 2025"
  ],
  authors: [{ name: "PruthaTek Team", url: "https://pruthatek.info" }],
  creator: "PruthaTek Team",
  publisher: "PruthaTek",
  openGraph: {
    title: "PruthaTek.info | Tech News, Tutorials & Insights",
    description: "Stay updated with in-depth tutorials, the latest in software development, and tech news that matters.",
    url: "https://pruthatek.info",
    siteName: "PruthaTek.info",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://pruthatek.info/apple-icon.png", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "PruthaTek - Tech Blog Cover"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PruthaTek.info | Tech News & Tutorials",
    description: "Your go-to blog for modern tech tutorials, software updates, and developer news.",
    creator: "@pruthatek", // Replace with actual Twitter handle
    images: ["https://pruthatek.info/apple-icon.png"]
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollBarMain">

      <body className={`  dark:bg-[#10100f] dark:text-[#fff] bg-[#fffffff5] text-[#10100f]  ${nunito.variable}  ${inter.variable}   ${source4.variable} ${manrope.variable} ${bebas.variable}   antialiased`}>
        <Wrapper>
          {children}
        </Wrapper>

      </body>
    </html>
  );
}

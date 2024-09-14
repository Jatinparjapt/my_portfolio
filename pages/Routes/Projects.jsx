import React, { useState ,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(result, "reuslt")
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
   <Head>
        <title>Projects | Jatin Kumar's Portfolio</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Explore the diverse range of projects showcased by Jatin Kumar. Discover detailed analyses, insights, and visual representations of each project to understand the breadth and depth of my work."/>
        <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate"/>
        <meta name="keywords" content="projects, Jatin Kumar, portfolio, web development projects, programming projects, project analysis, project showcase, web development, React projects, Next.js projects"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="English"/>
        <meta name="rating" content="General"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Projects | Jatin Kumar"/>
        <meta property="og:description" content="Explore the diverse range of projects showcased by Jatin Kumar. Discover detailed analyses, insights, and visual representations of each project to understand the breadth and depth of my work."/>
        <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/projects.jpg"/>
        <meta property="og:url" content="https://my-portfolio-three-green.vercel.app/projects"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Jatin Kumar's Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:image:alt" content="Visual representation of Jatin Kumar's projects page showcasing various web development projects."/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Projects | Jatin Kumar"/>
        <meta name="twitter:description" content="Explore the diverse range of projects showcased by Jatin Kumar. Discover detailed analyses, insights, and visual representations of each project to understand the breadth and depth of my work."/>
        <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/projects.jpg"/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>

        {/* Canonical Link */}
        <link rel="canonical" href="https://my-portfolio-three-green.vercel.app/projects"/>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        {/* Alternate Links */}
        <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app/projects"/>
        <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app/projects"/>

        {/* Structured Data */}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Person",
      name: "Jatin Kumar",
      url: "https://my-portfolio-three-green.vercel.app",
      description: "Hello! I'm Jatin...",
      sameAs: [
        "https://www.linkedin.com/in/jatin-kumar/","https://github.com/jatin-prajapt","https://my-portfolio-three-green.vercel.app","https://www.instagram.com/jatin_prajapat_ji/","https://www.facebook.com/jatinparjapte.parjapte/"
      ],
    }),
  }}
/>


        {/* Additional Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="Projects"/>
        <meta name="application-name" content="Projects"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta property="article:published_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:modified_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:author" content="Jatin Kumar"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:secure_url" content="https://my-portfolio-three-green.vercel.app/projects.jpg"/>
        <meta property="og:video" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="1200"/>
        <meta property="og:video:height" content="630"/>
        <meta property="og:audio" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:audio:type" content="audio/mpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="Visual representation of Jatin Kumar's projects page showcasing various web development projects."/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>
      </Head>
   <section className="pt-24 flex  justify-center flex-col ">
    <h1 className='flex justify-center items-center md:text-2xl font-semibold'>In-Depth Project Analysis  </h1>
    <div className="main md:w-[80%] w-full flex flex-wrap justify-center pt-10  rounded-lg md:mx-auto ">
      {data.map((items, index)=>(
        <Link className='' key={index} href={`/project/${items.id}`} > 
        <div  className={`first px-5 py-4 hover:shadow-2xl ${index=== 4 ? "lg:-mt-10":""} hover:shadow-indigo-700 w-auto  h-auto mx-4 rounded-xl my-4  md:max-w-64 bg-[#151347]`} >
        <div className="image h-auto w-auto  rounded-lg "><Image width={200} height={200} className='object-cover rounded-lg h-full w-full  ' src={items.image} /></div>
        <div className="heading flex my-4 justify-center font-medium text-2xl ">{items.title}</div>
        <div className="desc">
      {items.Description}
        </div>
      </div>
        </Link>
      ))}
      
     
    </div>
</section>
    </>
  )
}

export default Portfolio
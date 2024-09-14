import React from 'react'
import Image from 'next/image'
import html from "@/public/html.webp"
import css from "@/public/css.webp"
import tailwindcss from "@/public/tailwindcss.png"
import Javascript from '@/public/javascript.png'
import reactjs from "@/public/reactjs.png"
import nextjs from "@/public/nextjs.png"
import nodejs from "@/public/nodejs.png"
import expressjs from "@/public/express.png"
import mongodb from "@/public/mongodb.png"
import mariadb from "@/public/mariadb.png"
import vercal1 from "@/public/vercel1.png"
import heroku from "@/public/heroku.png"
import bootkstrap from "@/public/bootstrap.png"
import docker from "@/public/docker.png"
import jenkins from "@/public/jenkins.png"
import kali from "@/public/kali.png"
import parrot from "@/public/parrot.png"
import razorpay from "@/public/razorpay.png"
import redux from "@/public/redux.png"
import Head from 'next/head'
const Skills = () => {
  const imageArray = new Array(html ,css , tailwindcss, Javascript, reactjs, nextjs, nodejs, expressjs , mongodb ,mariadb , vercal1 , heroku ,bootkstrap,docker, jenkins,kali ,parrot, razorpay, redux )
  const imageArrayName = new Array("HTML 5", "CSS 3", "TailwindCss", "Javascript", "React JS" , "Next JS", "Node JS", "ExpressJS", "MongoDB","MariaDB", "Vercel", "Heroku", "Bootstrap", "Docker", "Jenkins" , "Kali", "Parrot", "RazorPay", "Redux")
  const imageArray2 = new Array( parrot, razorpay,reactjs, nextjs,html , vercal1  ,css , nodejs, expressjs ,  heroku ,bootkstrap,docker, jenkins,mariadb ,kali,mongodb , tailwindcss, Javascript,  redux )
  const imageArray2Name = new Array("Parrot OS", "RazorPay","React JS", "Next JS","HTML5" , "Vercel"  ,"CSS 3" , "Node JS", "Express JS" , "Heroku","Bootstrap","Docker", "Jenkins","MariaDB" ,"Kali OS","MongoDB" , "TailwindCss", "JavaScript", "Redux")

  return (
    <>
    <Head>
        <title>Skills | Jatin Kumar</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Explore the skills and expertise of Jatin Kumar, a web developer proficient in modern technologies and programming languages. Discover my technical capabilities and areas of specialization."/>
        <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate"/>
        <meta name="keywords" content="skills, Jatin Kumar, web developer skills, programming languages, technology expertise, front-end development, back-end development, full stack developer, tech skills"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="English"/>
        <meta name="rating" content="General"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Skills | Jatin Kumar"/>
        <meta property="og:description" content="Explore the skills and expertise of Jatin Kumar, a web developer proficient in modern technologies and programming languages. Discover my technical capabilities and areas of specialization."/>
        <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/skills.jpg"/>
        <meta property="og:url" content="https://my-portfolio-three-green.vercel.app/skills"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Jatin Kumar's Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:image:alt" content="A visual representation of Jatin Kumar's skills and expertise in web development and programming."/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Skills | Jatin Kumar"/>
        <meta name="twitter:description" content="Explore the skills and expertise of Jatin Kumar, a web developer proficient in modern technologies and programming languages. Discover my technical capabilities and areas of specialization."/>
        <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/skills.jpg"/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>

        {/* Canonical Link */}
        <link rel="canonical" href="https://my-portfolio-three-green.vercel.app/skills"/>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        {/* Alternate Links */}
        <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app/skills"/>
        <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app/skills"/>

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
        // Other social profiles
      ],
    }),
  }}
/>


        {/* Additional Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="Skills"/>
        <meta name="application-name" content="Skills"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta property="article:published_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:modified_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:author" content="Jatin Kumar"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:secure_url" content="https://my-portfolio-three-green.vercel.app/skills.jpg"/>
        <meta property="og:video" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="1200"/>
        <meta property="og:video:height" content="630"/>
        <meta property="og:audio" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:audio:type" content="audio/mpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="A visual representation of Jatin Kumar's skills and expertise in web development and programming."/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>
      </Head>
 <section className="text-gray-600 body-font  drop-shadow-2xl shadow-blue-500/50 ">
  <div className="container px-5 py-24 mx-auto  " >
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Showcasing My Web Development Skills</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-300 text-base">I am a proficient web developer specializing in both frontend and backend technologies, capable of delivering seamless and engaging web applications. My expertise spans creating responsive, visually appealing web interfaces and developing robust server-side applications and APIs. Additionally, I possess strong DevOps knowledge, ensuring efficient deployment and maintenance of applications. Here are the key skills that define my capabilities --{">"}</p>
    </div>
    <div className='scroll-container md:w-[90%] md:mx-auto mt-14 md:py-10 hide-scrollbar'>
  <div className='scrolling-carousel-r'>
    {imageArray2.map((items, index) => ( // Duplicate images for seamless scroll
      <div className='scroll-item mx-8 flex-shrink-0' key={index}>
        <Image className=' object-cover hover:scale-105 w-[70px] h-[70px] md:w-[90px] md:h-[90px] ' alt="hero" src={items} width={100} height={100} />
        <p className='text-white flex md:text-xl text-center ml-2 md:w-auto md:ml-0 mt-3 font-medium md:justify-center' >{imageArray2Name[index]}</p>
      </div>
    ))}
  </div>
</div>
<div className='scroll-container md:w-[90%] md:mx-auto md:py-12 mt-8 md:mt-20'>
  <div className='scrolling-carousel'>
    {imageArray.map((item, index) => (
      <div className='scroll-item mx-8  flex-shrink-0  ' key={index}>
       <Image
        className="bg-transparent object-cover hover:scale-105 w-[70px] h-[70px] md:w-[90px] md:h-[90px]  "
        alt="hero"
        src={item}
        width={100}
        height={100}
      />
        <p className='text-white flex md:text-xl mr-3 mt-3 md:w-auto font-medium justify-center' >{imageArrayName[index]}</p>
      </div>
    ))}
  </div>
 
</div>

  </div>
</section>
    </>
  )
}

export default Skills
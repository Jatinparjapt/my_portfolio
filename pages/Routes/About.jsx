import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ArticleIcon from '@mui/icons-material/Article';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import aboutMe from "@/public/aboutMe2.jpg"
import aboutb from "@/public/aboutB.jpg"
import Head from 'next/head';
const About = () => {
  return (
    <>
     <Head>
        <title>About Me | Jatin Kumar's Portfolio</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Learn more about Jatin Kumar, a passionate web developer with extensive experience in frontend, backend, and full-stack development. Discover my journey, skills, and professional achievements."/>
        <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate"/>
        <meta name="keywords" content="web developer, about Jatin Kumar, programming, web design, front-end development, back-end development, full-stack development, technology, JavaScript, React, Next.js"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="English"/>
        <meta name="rating" content="General"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Me | Jatin Kumar"/>
        <meta property="og:description" content="Learn more about Jatin Kumar, a passionate web developer with extensive experience in frontend, backend, and full-stack development. Discover my journey, skills, and professional achievements."/>
        <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>
        <meta property="og:url" content="https://my-portfolio-three-green.vercel.app/about"/>
        <meta property="og:type" content="profile"/>
        <meta property="og:site_name" content="Jatin Kumar's Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:image:alt" content="A detailed profile image of Jatin Kumar showcasing his professional achievements."/>
        <meta property="og:profile:first_name" content="Jatin"/>
        <meta property="og:profile:last_name" content="Kumar"/>
        <meta property="og:profile:username" content="jatin-prajapt"/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="About Me | Jatin Kumar"/>
        <meta name="twitter:description" content="Learn more about Jatin Kumar, a passionate web developer with extensive experience in frontend, backend, and full-stack development. Discover my journey, skills, and professional achievements."/>
        <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>

        {/* Canonical Link */}
        <link rel="canonical" href="https://my-portfolio-three-green.vercel.app/about"/>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        {/* Alternate Links */}
        <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app/about"/>
        <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app/about"/>

        {/* Structured Data */}
        <script type="application/ld+json">
        {{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jatin Kumar",
          "url": "https://my-portfolio-three-green.vercel.app/about",
          "description": "Learn more about Jatin Kumar, a passionate web developer with extensive experience in frontend, backend, and full-stack development.",
          "sameAs": [
            "https://www.linkedin.com/in/jatin-kumar/",
            "https://github.com/jatin-prajapt",
            "https://my-portfolio-three-green.vercel.app",
            "https://www.instagram.com/jatin_prajapat_ji/",
            "https://www.facebook.com/jatinparjapte.parjapte/"
          ]
        }}
        </script>

        {/* Additional Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="About Jatin Kumar"/>
        <meta name="application-name" content="About Jatin Kumar"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta property="article:published_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:modified_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:author" content="Jatin Kumar"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:secure_url" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>
        <meta property="og:video" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="1200"/>
        <meta property="og:video:height" content="630"/>
        <meta property="og:audio" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:audio:type" content="audio/mpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="A detailed profile image of Jatin Kumar showcasing his professional achievements."/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>
      </Head>
    <section id='About' className="">
    <div className=" relative mx-auto flex lg:gap-3 px-5 py-24 flex-col lg:flex-row items-center justify-center">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: `url(${aboutb.src})` }}
  />
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center">
    <Image
      width={200}
      height={150}
      className="md:w-[40%] hover:shadow-2xl cursor-pointer hover:shadow-blue-600 w-[60%] md:h-[70%] mb-10 rounded"
      alt="hero"
      src={aboutMe}
    />
    <div className="text-center w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Full Stack Web Developer
      </h1>
      <div className="mb-8 text-base md:text-xl leading-relaxed w-full">
        <p className="my-4 font-mono">
          Hello! I'm Jatin, a dedicated 20-year-old full-stack web developer and current student at AlmaBetter, specializing in the MERN stack. My expertise includes a strong foundation in <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="HTML">HTML</span>, <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="CSS">CSS</span>, and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="JavaScript">JavaScript</span>, complemented by advanced skills in frameworks such as <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="React Js">React Js</span> and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Next Js">Next.js</span>, as well as server-side technologies like <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Node Js">Node.js</span> and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Express JS">Express Js</span>.
          <br />
          In addition to my proficiency in these technologies, I am experienced in database management with both <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="MongoDB">MongoDB</span> and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="MariaDB">MariaDB</span>. My development journey includes the creation of several impactful projects, such as a dynamic <Link href="https://batch-system-smoky.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">Batch System</Link> and an <Link href="https://my-quiz-app-beta.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">engaging Quiz App</Link>. These projects not only demonstrate my technical abilities but also highlight my commitment to delivering interactive and user-friendly web experiences.
          <br />
          Beyond these projects, I have also worked on a variety of applications, including a <span>Flipkart clone</span>, <Link href="https://shazam-music-app-redux-toolkit.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">Shaza music clone</Link>, <Link href="https://my-quiz-app-beta.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">a quiz application</Link>, and <Link href="https://entertainment-frontend-one.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">an entertainment app</Link>. My technical toolkit extends to <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="DevOps">DevOps</span> knowledge with experience in <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Jenkins And Docker">Jenkins and Docker</span>, further enhancing my ability to build, deploy, and manage applications efficiently.
          <br />
          Join me as I continue to explore and innovate in the ever-evolving field of web development, striving to push the boundaries of what’s possible and deliver exceptional digital solutions.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-2">
        <Link href="/Routes/Portfolio" className="inline-flex mb-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:shadow-indigo-600 hover:shadow-2xl rounded text-lg">
          <WorkHistoryIcon className="mr-2" />Portfolio
        </Link>
        <Link href="/Routes/Resume" className="inline-flex mb-2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:shadow-blue-600 hover:shadow-2xl rounded text-lg">
          <FileOpenIcon className="mr-2" />Resume
        </Link>
        <Link href="/Routes/Skills" className="inline-flex mb-2 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:shadow-green-600 hover:shadow-2xl rounded text-lg">
          <PsychologyIcon className="mr-2" />Skills
        </Link>
        <Link href="/Routes/Contact" className="ml-4 mb-2 inline-flex text-gray-700 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:shadow-gray-600 hover:shadow-2xl rounded text-lg">
          <ContactMailIcon className="mr-2" />Contact
        </Link>
      </div>
    </div>
  </div>
</div>


</section>
    </>
  )
}

export default About
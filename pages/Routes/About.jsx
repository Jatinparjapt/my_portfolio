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
        <title>About Me Page</title>
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
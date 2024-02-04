import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ArticleIcon from '@mui/icons-material/Article';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import aboutMe from "@/public/aboutMe.jpg"
const About = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image  width={720} height={600} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={aboutMe}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Full Stack Web Developer</h1>
      <p className="mb-8 text-xl leading-relaxed">Hello there! I'm Jatin, a passionate 20-year-old full-stack web developer and current student at AlmaBetter, specializing in the MERN stack. With a solid foundation in  HTML, CSS, and JavaScript, I've honed my skills in popular frameworks like React and Next, as well as server-side technologies such as Node.js and Express.My proficiency extends to database management, encompassing both MongoDB and MariaDB. I've already embarked on my journey by crafting two noteworthy projects: a dynamic {<Link className='text-2xl  text-blue-600 underline underline-offset-8  mr-2'href={"https://bestnewsworld.online/"}> News Website </Link>} and an { <Link className='text-2xl underline underline-offset-8 text-blue-600 ml-2 mr-2' href={"https://www.myquizapp.xyz/"} >Engaging Quiz App</Link> } These projects not only showcase my technical prowess but also reflect my commitment to creating interactive and user-friendly web experiences. Join me on this exciting journey as I continue to explore and innovate in the ever-evolving realm of web development.</p>

      <div className="flex flex-wrap justify-center space-x-4  md:space-x-2   ">
      <Link href={"/Routes/Blog"} className="inline-flex  mb-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><ArticleIcon className="mr-2" />Blog</Link>

        <Link href={"/Routes/Portfolio"} className="inline-flex mb-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><WorkHistoryIcon className="mr-2" />Portfolio</Link>

        <Link href={"/Routes/Resume"} className="inline-flex mb-2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"><FileOpenIcon  className="mr-2"/>Resume</Link>

        <Link href={"/Routes/Skils"} className="inline-flex mb-2 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><PsychologyIcon  className="mr-2"/>Skills</Link>

        <Link href={"/Routes/Contact"} className="ml-4  mb-2 inline-flex text-gray-700 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"><ContactMailIcon className="mr-2"/>Contact</Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
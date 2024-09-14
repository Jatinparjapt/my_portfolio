import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Head from 'next/head';
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
const Contect = () => (
  <>
   <Head>
        <title>Contact Page</title>
      </Head>
    <section className="body-font h-[100vh] flex justify-center ">
      <div className="container flex flex-col  justify-center items-center ">
        <div>
      <h1>Contact With Me</h1>

        </div>
        <div  className='md:w-[45%] w-full mt-4 bg-[#171749] md:px-10 rounded-xl py-5 ' >

        <form action="" className='flex flex-col w-full' >
          <input className='w-full mt-6 px-1 py-2 rounded-lg bg-[#262674] border-b-2 outline-0   ' type="text" placeholder='Enter Your First Name' />
          <input className='w-full mt-6 px-1 py-2 rounded-lg bg-[#262674] border-b-2 outline-0   ' type="text" placeholder='Enter Your Last Name' />
          <input className='w-full mt-6 px-1 py-2 rounded-lg bg-[#262674] border-b-2 outline-0   ' type="email" placeholder='Enter Your Email'/>
          <Link href={"mailto:jatin3961jk@gmail.com?subject=I%20would%20like%20to%20connect%20with%20you&body=I%20need%20help."} title='Connect Through Mail' className='mt-10 bg-blue-600 py-3 md:w-[50%] flex justify-center  md:mx-auto rounded-lg text-xl hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-700 ' type="button">Connect </Link>
        </form>
        <div className='flex flex-wrap place-content-around mt-8' >
          <Link className='flex items-center ' title='Instagram' href={"https://www.instagram.com/jatin_prajapat_ji/"}><BsInstagram className='mx-1' /> Instagram</Link>
          <Link className='flex items-center 'title='LinkedIn' href={"https://www.linkedin.com/in/jatin-kumar-ji/"}> <IoLogoLinkedin className='mx-1' /> LinkedIn</Link>
          <Link className='flex items-center ' title='Github' href={"https://github.com/Jatinparjapt"}> <BsGithub className='mx-1' /> Github</Link>
          <Link className='flex items-center ' title='YouTube' href={"https://www.youtube.com/@parjapticreator"}> <FaYoutube className='mx-1' /> Youtube</Link>
        </div>
        </div>
      </div>
       
    </section>
  </>
)

export default Contect
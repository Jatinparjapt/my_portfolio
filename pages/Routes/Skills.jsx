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
        <title>Skills Page</title>
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
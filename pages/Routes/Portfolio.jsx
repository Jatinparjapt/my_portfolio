import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import news1 from "@/public/news1.png"
import news2 from "@/public/news2.png"
import quiz1 from "@/public/quiz1.png"
import quiz2 from "@/public/quiz2.png"


const Portfolio = () => {
 
  const [link ,setLink ] = useState("https://bestnewsworld.online/")
  const [photoHref , setPhotoHref ] = useState(news1)
  const [photoHref2 , setPhotoHref2 ] = useState(news2)
  const changePhoto2 = ()=>{
    setPhotoHref(news1)
    setPhotoHref2(news2)
    setLink("https://bestnewsworld.online/")
   
  }
  const changePhoto = ()=>{
    setPhotoHref(quiz1)
    setPhotoHref2(quiz2)
    setLink("https://www.myquizapp.xyz/")

  }
  return (
    <>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
    <div className="flex mx-auto flex-wrap mb-20">
      <div onClick={changePhoto2} className="sm:px-6 cursor-pointer py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium hover:bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
       Project 1 --- News App 
      </div>
      <div onClick={changePhoto} className="sm:px-6 py-3 w-1/2 sm:w-auto cursor-pointer justify-center sm:justify-start border-b-2 title-font font-medium hover:bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
       Project 2 --- Quiz App 
      </div>
    </div>
    <Image className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={photoHref}/>
    <div className="flex flex-col text-center w-full">
      <h1 className="text-xl font-medium title-font mb-4 text-gray-900">MERN STACK</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The MERN (MongoDB, Express.js, React.js, Node.js) stack is a powerful and popular technology stack for building full-stack web applications. MongoDB serves as the NoSQL database, Express.js handles server-side logic, React.js manages the user interface, and Node.js facilitates server-side scripting. Together, they provide a seamless and efficient development environment for building scalable and dynamic web applications.</p>
    </div>
    <Image className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover mt-4  object-center rounded" alt="hero" src={photoHref2}/>
    <div className="flex flex-col text-center w-full">
      <h1 className="text-xl font-medium title-font mb-4 text-gray-900">NEXTJS APP</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Next.js is a popular React framework designed for building efficient and scalable web applications. It provides features like server-side rendering, automatic code splitting, and a simple API for building dynamic pages. With its built-in routing and seamless integration with React, Next.js streamlines the development process and enhances the performance of web applications.</p>
    </div>
  </div>
  <div className="flex place-content-around">
  <Link  href={link} className='inline-flex mb-2 text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'  >See Live</Link>
  <Link href={"https://github.com/Jatinparjapt/My_Quiz_App"} className='inline-flex mb-2 text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg' >Source Code</Link>


  </div>
</section>
    </>
  )
}

export default Portfolio
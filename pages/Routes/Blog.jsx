import React from 'react'
import Image from 'next/image'
import logo from "@/public/logo.jpg"
import Link from 'next/link'
import Head from 'next/head'
const Blog = () => {
  return (
    <>
     <Head>
        <title>Blog Page</title>
      </Head>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto cursor-pointer ">
    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Blogs</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
        <h1 className='text-2xl text-sky-500 mb-3' ><b> NewsApp</b></h1>
        <Link href={'https://bestnewsworld.online'} >
       
          <p className="leading-relaxed mb-6">In a world buzzing with information, staying informed has never been more crucial. Today, we are thrilled to introduce NewsApp, a revolutionary platform designed to redefine your news consumption experience. Let's embark on a journey where information meets innovation, and you are at the center of it all.
          We understand the importance of staying updated in real-time. With our Breaking News feature, you'll receive instant notifications for the latest and most significant events. Whether it's a major global development or a local scoop, NewsApp ensures you're always in the know.</p>
          <div className="flex flex-row  items-center">
            <Image alt="testimonial" src={logo} width={400} height={370} />
            <span className="flex-grow flex flex-col  pl-4">
              <span className="title-font font-medium text-gray-900">Jatin Kumar</span>
              <span className="text-gray-500 text-sm">Full Stack Web Developer</span>
            </span>
          </div>
          </Link> 
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
        <h1 className='text-2xl text-sky-500 mb-3' ><b> QuizApp</b></h1>
 <Link href={"https://www.myquizapp.xyz/"} >
          <p className="leading-relaxed mb-6">Our Quiz App is more than just a collection of interactive quizzes. It's a gateway to a world of knowledge-sharing, where users can create, play, and explore quizzes in a visually appealing and user-friendly environment. By leveraging React, Next.js, Material-UI, and the potential incorporation of Redux for state management, our Quiz App promises an immersive learning experience for users of all backgrounds. Join us on this educational journey, and let the joy of interactive learning unfold before you!</p>
          <div  className="inline-flex items-center">
            <Image alt="testimonial" src={logo} width={400} height={370}/>
            <span className="flex-grow flex flex-col  m-2  pl-4">
              <span className="title-font font-medium text-gray-900">Jatin Kumar</span>
              <span className="text-gray-500 text-sm">Full Stack Web Developer</span>
            </span>
          </div>
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Blog
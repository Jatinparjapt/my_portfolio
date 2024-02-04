import React from 'react'
import Image from 'next/image'
import html from "@/public/html.webp"
import css from "@/public/css.webp"
import tailwindcss from "@/public/tailwindcss.jpg"
import Javascript from '@/public/javascript.png'
import reactjs from "@/public/reactjs.png"
import nextjs from "@/public/nextjs.jpg"
import nodejs from "@/public/nodejs.jpg"
import expressjs from "@/public/express.png"
import mongodb from "@/public/mongodb.png"
import mariadb from "@/public/mariadb.png"
import vercal1 from "@/public/vercel1.png"
import heroku from "@/public/heroku.png"
const Skills = () => {
  return (
    <>
 <section className="text-gray-600 body-font  drop-shadow-2xl shadow-blue-500/50 ">
  <div className="container px-5 py-24 mx-auto  " >
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Tech Skills</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Building a robust web app with Next.js frontend, Node.js and Express backend, using MongoDB for data storage—a dynamic, efficient stack.</p>
    </div>
    <div className="flex flex-wrap -m-2 drop-shadow-2xl shadow-blue-500/50 ">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50   ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={html} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Frontend</h2>
            <p className="text-gray-500">HTML</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={css} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">FRONTEND</h2>
            <p className="text-gray-500">CSS</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={tailwindcss} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">FRONTEND</h2>
            <p className="text-gray-500">TAILWINDCSS</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={Javascript} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">FRONTEND</h2>
            <p className="text-gray-500">JAVASCRIPT</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={reactjs} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">FRONTEND</h2>
            <p className="text-gray-500">REACTJS</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={nextjs} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">FRONTEND</h2>
            <p className="text-gray-500">NEXTJS</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={nodejs} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">BACKEND</h2>
            <p className="text-gray-500">NODEJS</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={expressjs} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">BACKEND</h2>
            <p className="text-gray-500">EXPRESSJS</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={mariadb} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">DATABASE</h2>
            <p className="text-gray-500">MARIADB</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={mongodb} alt="team" className="w-16 h-16 bg-gray-100 object-cover "/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">DATABASE</h2>
            <p className="text-gray-500">MONGODB</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={vercal1} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">HOST</h2>
            <p className="text-gray-500">VERCEL</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full drop-shadow-2xl shadow-blue-500/50 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={heroku} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">HOST</h2>
            <p className="text-gray-500">HEROKU</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default Skills
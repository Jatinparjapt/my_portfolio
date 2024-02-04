import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/logo.jpg"
import aboutMe from "@/public/aboutMe.jpg"

const footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font  ">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    
        <span className="ml-3 text-xl">
        <Image src={logo} alt="logo" width={40} height={45} className='rounded-full' />
        </span>

      <p className="mt-2 text-sm text-gray-500">Near As You Think</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Help</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/Routes/Contact"} className="text-gray-600 hover:text-gray-800">Contect Us</Link>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICY</h2>
        <nav className="list-none mb-10">
          <li> 
            <Link href={"/Routes/Privacy"} className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Me</h2>
        <nav className="list-none mb-10">
          <Link href={"/Routes/About"}>
            <Image src={aboutMe} alt="logo" width={300} height={100}/>
          </Link>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <Link href={"https://www.instagram.com/jatin_prajapat_ji/"} rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">jatin_prajapat_ji</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href={"https://www.facebook.com/jatinparjapte.parjapte/"} className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link href={"https://www.instagram.com/jatin_prajapat_ji/"} className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link href={"https://www.linkedin.com/in/jatin-kumar-127055246/ "} className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default footer
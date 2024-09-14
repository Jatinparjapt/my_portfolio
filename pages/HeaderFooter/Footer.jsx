import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/logo.jpg"
import aboutMe from "@/public/aboutMe.jpg"
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
const footer = () => {
  return (
    <>
    <footer className="">
  <div className=" bg-[#151347] container rounded-lg shadow-xl mb-4 px-5 py-4 mx-auto">
    <div className=" mx-auto py-4 px-5 flex flex-wrap place-content-evenly  ">
      <Link href={"/"}  className=" text-sm flex text-center sm:text-left">jatin_prajapat_ji
        <p   className=" ml-1" >©MyPortfolio</p>
      </Link>
      <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link rel="noopener noreferrer" target="_blank" href={"https://www.facebook.com/jatinparjapte.parjapte/"} className="">
        <ImFacebook2/>
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href={"https://www.instagram.com/jatin_prajapat_ji/"} className="ml-3 ">
          <BsInstagram/>
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href={"https://www.linkedin.com/in/jatin-kumar-127055246/ "} className="ml-3 ">
          <IoLogoLinkedin/>
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href={"https://github.com/Jatinparjapt"} className='ml-3' >
            <BsGithub/> 
          </Link>
      </p>
    </div>
  </div>
</footer>
    </>
  )
}

export default footer
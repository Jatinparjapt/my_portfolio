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
    <footer className="w-full bg-slate-900 border-t border-slate-800/50 pt-12 pb-8">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold text-white mb-2 tracking-tighter">
              JATIN <span className="text-cyan-400">KUMAR</span>
            </Link>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/jatinparjapte.parjapte/" className="text-slate-400 hover:text-cyan-400 transition-colors text-xl">
              <ImFacebook2/>
            </Link>
            <Link rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/jatin_prajapat_ji/" className="text-slate-400 hover:text-cyan-400 transition-colors text-xl">
              <BsInstagram/>
            </Link>
            <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jatin-kumar-127055246/" className="text-slate-400 hover:text-cyan-400 transition-colors text-xl">
              <IoLogoLinkedin/>
            </Link>
            <Link rel="noopener noreferrer" target="_blank" href="https://github.com/Jatinparjapt" className="text-slate-400 hover:text-cyan-400 transition-colors text-xl">
              <BsGithub/>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800/30 text-center">
          <p className="text-xs text-slate-600 uppercase tracking-[0.2em]">Designed & Built with Passion</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default footer
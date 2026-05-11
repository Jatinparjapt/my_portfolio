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
        <title>Contact Jatin Kumar | Full-Stack Developer & DevOps Engineer</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Contact Jatin Kumar, a seasoned full-stack web developer, and DevOps engineer. Reach out for collaborations and DevOps needs."/>
        <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate"/>
        <meta name="keywords" content="contact, Jatin Kumar, web developer, reach out, contact form, inquiries, collaborations, professional contact, web development"/>
        <meta name="keywords" content="Jatin Parjapat Professional Web Developer, Jatin Parjapat Career in Web Development, Jatin Parjapat Web Developer Journey, Jatin Parjapat Web Developer Tools, Jatin Parjapat Developer Resources, Jatin Parjapat Web Developer Portfolio, Jatin Parjapat Personal Projects, Jatin Parjapat Developer Experience, Jatin Parjapat Coding Projects, Jatin Parjapat Technical Portfolio, Jatin Parjapat JavaScript Expert, Jatin Parjapat Modern Web Development, Jatin Parjapat Innovative Web Solutions, Jatin Parjapat Efficient Web Development, Jatin Parjapat Scalable Web Solutions, Jatin Parjapat Next.js Developer, Jatin Parjapat Frontend Skills, Jatin Parjapat Backend Skills, Jatin Parjapat DevOps Skills, Jatin Parjapat MERN Projects, Jatin Parjapat Development Pipeline, Jatin Parjapat Automated Deployment, Jatin Parjapat Web Development Lifecycle, Jatin Parjapat Continuous Integration, Jatin Parjapat Continuous Delivery, Jatin Parjapat Agile Development, Jatin Parjapat Sprint Planning, Jatin Parjapat Code Review, Jatin Parjapat Pair Programming, Jatin Parjapat Software Engineering, Jatin Parjapat System Design, Jatin Parjapat API Development, Jatin Parjapat Microservices, Jatin Parjapat Web Security, Jatin Parjapat Authentication and Authorization, Jatin Parjapat Web Performance Optimization, Jatin Parjapat Cross-Browser Compatibility, Jatin Parjapat Web Accessibility, Jatin Parjapat Progressive Web Apps, Jatin Parjapat Serverless Architecture, Jatin Parjapat Cloud Services, Jatin Parjapat DevOps Best Practices, Jatin Parjapat Infrastructure as Code, Jatin Parjapat Monitoring and Logging, Jatin Parjapat Containerization," />
        <meta
          name="keywords" 
          content = "Jatin Kumar Full Stack Web Developer, Jatin Kumar Frontend Developer, Jatin Kumar ReactJS Developer, Jatin Kumar Backend Developer, Jatin Kumar DevOps Engineer, Jatin Kumar MERN Stack Developer, Jatin Kumar HTML CSS JavaScript, Jatin Kumar Node.js Developer, Jatin Kumar Express.js Developer, Jatin Kumar MongoDB Developer, Jatin Kumar MariaDB Developer, Jatin Kumar AlmaBetter Student, Jatin Kumar Portfolio, Jatin Kumar Projects, Jatin Kumar Web Development, Jatin Kumar Tech Skills, Jatin Kumar Flipkart Clone, Jatin Kumar Shaza Music Clone, Jatin Kumar Quiz App, Jatin Kumar Entertainment App, Jatin Kumar Docker, Jatin Kumar Jenkins, Jatin Parjapat High-Quality Content, Jatin Parjapat Web Development Blog, Jatin Parjapat Tech Blog, Jatin Parjapat Developer Blog, Jatin Parjapat Web Developer Skills, Jatin Parjapat Code Examples, Jatin Parjapat Coding Tutorials, Jatin Parjapat Web Development Tips, Jatin Parjapat Coding Challenges, Jatin Parjapat Tech Community, Jatin Parjapat Open Source Projects, Jatin Parjapat Orchestration, Jatin Parjapat Kubernetes, Jatin Parjapat Helm Charts, Jatin Parjapat Cloud Native Applications, Jatin Parjapat Continuous Testing, Jatin Parjapat Deployment Strategies, Jatin Parjapat Rollback Mechanisms, Jatin Parjapat High Availability, Jatin Parjapat Fault Tolerance, Jatin Parjapat Disaster Recovery, Jatin Parjapat Load Balancing, Jatin Parjapat Scalability, Jatin Parjapat Web Analytics, Jatin Parjapat User Experience, Jatin Parjapat User Interface Design, Jatin Parjapat Frontend Optimization, Jatin Parjapat Backend Optimization, Jatin Parjapat Data Modeling, Jatin Parjapat Database Optimization, Jatin Parjapat Schema Design, Jatin Parjapat Query Optimization"
        />
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="English"/>
        <meta name="rating" content="General"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Me | Jatin Kumar"/>
        <meta property="og:description" content="Get in touch with Jatin Kumar, a skilled web developer. Reach out for inquiries, collaborations, or just to say hello. Discover how you can contact me through this page."/>
        <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/contact.jpg"/>
        <meta property="og:url" content="https://my-portfolio-three-green.vercel.app/contact"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Jatin Kumar's Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:image:alt" content="Contact page of Jatin Kumar showcasing how to reach out for inquiries and collaborations."/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Contact Me | Jatin Kumar"/>
        <meta name="twitter:description" content="Get in touch with Jatin Kumar, a skilled web developer. Reach out for inquiries, collaborations, or just to say hello. Discover how you can contact me through this page."/>
        <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/contact.jpg"/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>

        {/* Canonical Link */}
        <link rel="canonical" href="https://my-portfolio-three-green.vercel.app/contact"/>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        {/* Alternate Links */}
        <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app/contact"/>
        <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app/contact"/>

        {/* Structured Data */}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Person",
      name: "Jatin Kumar",
      url: "https://my-portfolio-three-green.vercel.app",
      description: "Hello! I'm Jatin...",
      sameAs: [
        "https://www.linkedin.com/in/jatin-kumar/","https://github.com/jatin-prajapt","https://my-portfolio-three-green.vercel.app","https://www.instagram.com/jatin_prajapat_ji/","https://www.facebook.com/jatinparjapte.parjapte/"
      ],
    }),
  }}
/>


        {/* Additional Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="Contact Jatin Kumar"/>
        <meta name="application-name" content="Contact Jatin Kumar"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta property="article:published_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:modified_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:author" content="Jatin Kumar"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:secure_url" content="https://my-portfolio-three-green.vercel.app/contact.jpg"/>
        <meta property="og:video" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="1200"/>
        <meta property="og:video:height" content="630"/>
        <meta property="og:audio" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:audio:type" content="audio/mpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="Contact page of Jatin Kumar showcasing how to reach out for inquiries and collaborations."/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>
      </Head>
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-900">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-cyan-400 font-mono tracking-widest uppercase mb-4 text-sm">Let's build together</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Contact With Me</h1>
        </div>

        <div className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">First Name</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
                type="text" 
                placeholder="Enter Your First Name" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Last Name</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
                type="text" 
                placeholder="Enter Your Last Name" 
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Email Address</label>
              <input 
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
                type="email" 
                placeholder="Enter Your Email"
              />
            </div>
            
            <div className="md:col-span-2 mt-4">
              <Link 
                href="mailto:jatin3961jk@gmail.com?subject=I%20would%20like%20to%20connect%20with%20you&body=I%20need%20help." 
                title='Connect Through Mail' 
                className="w-full py-4 bg-cyan-500 text-slate-900 font-bold rounded-xl text-center hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex justify-center"
              >
                Send Message
              </Link>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-slate-700/30">
            {[
              { name: 'Instagram', icon: <BsInstagram />, href: 'https://www.instagram.com/jatin_prajapat_ji/' },
              { name: 'LinkedIn', icon: <IoLogoLinkedin />, href: 'https://www.linkedin.com/in/jatin-kumar-ji/' },
              { name: 'Github', icon: <BsGithub />, href: 'https://github.com/Jatinparjapt' },
              { name: 'Youtube', icon: <FaYoutube />, href: 'https://www.youtube.com/@parjapticreator' }
            ].map((social) => (
              <Link 
                key={social.name}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group" 
                title={social.name} 
                href={social.href}
              >
                <span className="text-xl group-hover:text-cyan-400 transition-colors">{social.icon}</span>
                <span className="text-sm font-medium">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Contect
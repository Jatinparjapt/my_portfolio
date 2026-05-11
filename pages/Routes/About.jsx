import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ArticleIcon from '@mui/icons-material/Article';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import aboutMe from "@/public/aboutMe2.jpg"
import aboutb from "@/public/aboutB.jpg"
import Head from 'next/head';
const About = () => {


  return (
    <>
     <Head>
        <title>About Me | Jatin Kumar's Portfolio</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Learn more about Jatin Kumar, a passionate web developer with extensive experience in frontend, backend, and full-stack development. Discover my journey, skills, and professional achievements."/>
        <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate"/>
        <meta name="keywords" content="web developer, about Jatin Kumar, programming, web design, front-end development, back-end development, full-stack development, technology, JavaScript, React, Next.js"/>
        <meta name="keywords" content="Jatin Kumar, Web Developer, Full Stack Developer, Next.js Developer, React, Node.js, MERN Stack, Frontend Developer, Backend Developer, AI Integrations, WebRTC, FastAPI" />
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
        <meta property="og:title" content="About Me | Jatin Kumar"/>
        <meta property="og:description" content="Learn more about Jatin Kumar, a passionate web developer with extensive experience in frontend, backend, and full-stack development. Discover my journey, skills, and professional achievements."/>
        <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>
        <meta property="og:url" content="https://my-portfolio-three-green.vercel.app/about"/>
        <meta property="og:type" content="profile"/>
        <meta property="og:site_name" content="Jatin Kumar's Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:image:alt" content="A detailed profile image of Jatin Kumar showcasing his professional achievements."/>
        <meta property="og:profile:first_name" content="Jatin"/>
        <meta property="og:profile:last_name" content="Kumar"/>
        <meta property="og:profile:username" content="jatin-prajapt"/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="About Me | Jatin Kumar"/>
        <meta name="twitter:description" content="Learn more about Jatin Kumar, a passionate web developer with extensive experience in frontend, backend, and full-stack development. Discover my journey, skills, and professional achievements."/>
        <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>

        {/* Canonical Link */}
        <link rel="canonical" href="https://my-portfolio-three-green.vercel.app/about"/>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        {/* Alternate Links */}
        <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app/about"/>
        <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app/about"/>

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
        <meta name="apple-mobile-web-app-title" content="About Jatin Kumar"/>
        <meta name="application-name" content="About Jatin Kumar"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/sitemap.xml"/>
        <meta property="article:published_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:modified_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:author" content="Jatin Kumar"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:secure_url" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>
        <meta property="og:video" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="1200"/>
        <meta property="og:video:height" content="630"/>
        <meta property="og:audio" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:audio:type" content="audio/mpeg"/>
      </Head>
    <section id='About' className="w-full py-24 bg-slate-900/50">
      <div className="container mx-auto px-5 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Image */}
        <div className="w-full lg:w-5/12 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-2xl transform rotate-3 scale-105 blur-lg"></div>
          <Image
            width={400}
            height={400}
            className="w-full max-w-[350px] object-cover rounded-2xl shadow-2xl relative z-10 border border-slate-700/50"
            alt="Jatin Kumar"
            src={aboutMe}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-7/12 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Developer</span>
          </h1>
          <div className="mb-8 text-base md:text-lg leading-relaxed text-slate-300 space-y-6">
            <p>
              Hello! I'm Jatin, a Full Stack Developer with 2+ years of professional experience. I am currently working at <Link href={"http://tallento.ai"} title='Tallent.ai' className="text-cyan-400 hover:underline">Tallent.ai</Link>, specializing in building scalable enterprise systems using the MERN stack.
            </p>
            <p>
              My expertise includes a strong foundation in frontend architectures and server-side technologies. I build robust solutions using modern tools:
            </p>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {['HTML5', 'CSS3', 'JavaScript', 'React Js', 'TypeScript', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'MariaDB'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-800 text-cyan-300 text-sm rounded-full border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
            <p>
              My development journey includes architecting complex, scalable real-time systems such as the <Link href="https://panha-official-hzuc.vercel.app/" className="text-indigo-400 hover:underline font-medium">PANHA Real-Time Communication Platform</Link> and the <Link href="https://tallento.ai" className="text-indigo-400 hover:underline font-medium">AI-Powered Interview Dashboard</Link>. I've also built an Enterprise Multi-Step Registration System and an Automated Resume Parsing System.
            </p>
            <p>
              My technical toolkit extends to DevOps knowledge with experience in <span className="text-white font-medium">Docker</span>, <span className="text-white font-medium">AWS</span>, and <span className="text-white font-medium">WebRTC</span>, enhancing my ability to build, deploy, and manage distributed applications efficiently.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link title='Projects' href="/Routes/Projects" className="flex items-center px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-lg hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
              <WorkHistoryIcon className="mr-2" /> Projects
            </Link>
            <Link title='Resume' href="/Routes/Resume" className="flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
              <FileOpenIcon className="mr-2" /> Resume
            </Link>
            <Link title='Skills' href="/Routes/Skills" className="flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
              <PsychologyIcon className="mr-2" /> Skills
            </Link>
            <Link title='Contact' href="/Routes/Contact" className="flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
              <ContactMailIcon className="mr-2" /> Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About

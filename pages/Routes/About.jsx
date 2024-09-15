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
        <meta name = "keywords" content = "Jatin Kumar Interactive Web Experiences, Jatin Kumar User-friendly Web Development, Jatin Kumar Digital Solutions, Jatin Kumar Web Innovations, Jatin Kumar AlmaBetter Developer, Jatin Kumar GitHub, Jatin Kumar LinkedIn, Jatin Kumar Web Technologies, Jatin Kumar Frontend Frameworks, Jatin Kumar Server-side Technologies, Jatin Kumar Dynamic Web Systems, Jatin Kumar Web Applications, Jatin Kumar Responsive Design, Jatin Kumar Fast Load Times, Jatin Kumar SEO Optimization, Jatin Kumar High-Quality Content, Jatin Kumar Web Development Blog, Jatin Kumar Tech Blog, Jatin Kumar Developer Blog, Jatin Kumar Web Developer Skills, Jatin Kumar Code Examples, Jatin Kumar Coding Tutorials, Jatin Kumar Web Development Tips, Jatin Kumar Coding Challenges, Jatin Kumar Tech Community, Jatin Kumar Open Source Projects, Jatin Kumar Professional Web Developer, Jatin Kumar Career in Web Development, Jatin Kumar Web Developer Journey, Jatin Kumar Web Developer Tools, Jatin Kumar Developer Resources, Jatin Kumar Web Developer Portfolio, Jatin Kumar Personal Projects, Jatin Kumar Developer Experience, Jatin Kumar Coding Projects, Jatin Kumar Technical Portfolio,  Jatin Kumar Caching Strategies, Jatin Kumar Data Migration, Jatin Kumar Backup and Restore, Jatin Kumar Data Security, Jatin Kumar Encryption, Jatin Kumar Secure Coding, Jatin Kumar Threat Modeling, Jatin Kumar Vulnerability Management, Jatin Kumar Penetration Testing, Jatin Kumar Incident Response, Jatin Kumar Compliance and Regulations, Jatin Kumar GDPR, Jatin Kumar CCPA, Jatin Kumar Web Development Standards, Jatin Kumar Code Quality, Jatin Kumar Testing Frameworks, Jatin Kumar Unit Testing, Jatin Kumar Integration Testing, Jatin Kumar End-to-End Testing, Jatin Kumar Test Automation, Jatin Kumar Test-Driven Development"/>
        <meta name="keywords" content="Jatin Kumar JavaScript Expert, Jatin Kumar Modern Web Development, Jatin Kumar Innovative Web Solutions, Jatin Kumar Efficient Web Development, Jatin Kumar Scalable Web Solutions, Jatin Kumar Next.js Developer, Jatin Kumar Frontend Skills, Jatin Kumar Backend Skills, Jatin Kumar DevOps Skills, Jatin Kumar MERN Projects, Jatin Kumar Development Pipeline, Jatin Kumar Automated Deployment, Jatin Kumar Web Development Lifecycle, Jatin Kumar Continuous Integration, Jatin Kumar Continuous Delivery, Jatin Kumar Agile Development, Jatin Kumar Sprint Planning, Jatin Kumar Code Review, Jatin Kumar Pair Programming, Jatin Kumar Software Engineering, Jatin Kumar System Design, Jatin Kumar API Development, Jatin Kumar Microservices, Jatin Kumar Web Security, Jatin Kumar Authentication and Authorization, Jatin Kumar Web Performance Optimization, Jatin Kumar Cross-Browser Compatibility, Jatin Kumar Web Accessibility, Jatin Kumar Progressive Web Apps, Jatin Kumar Serverless Architecture, Jatin Kumar Cloud Services, Jatin Kumar DevOps Best Practices, Jatin Kumar Infrastructure as Code, Jatin Kumar Monitoring and Logging, Jatin Kumar Containerization, Jatin Kumar Orchestration, Jatin Kumar Kubernetes, Jatin Kumar Helm Charts, Jatin Kumar Cloud Native Applications, Jatin Kumar Continuous Testing, Jatin Kumar Deployment Strategies, Jatin Kumar Rollback Mechanisms, Jatin Kumar High Availability, Jatin Kumar Fault Tolerance, Jatin Kumar Disaster Recovery, Jatin Kumar Load Balancing, Jatin Kumar Scalability, Jatin Kumar Web Analytics, Jatin Kumar User Experience, Jatin Kumar User Interface Design, Jatin Kumar Frontend Optimization, Jatin Kumar Backend Optimization, Jatin Kumar Data Modeling, Jatin Kumar Database Optimization, Jatin Kumar Schema Design, Jatin Kumar Query Optimization, Jatin Kumar Indexing Strategies," />
        <meta name="keywords" content=" Jatin Kumar CI/CD, Jatin Kumar Cloud Computing, Jatin Kumar Full Stack Projects,  Jatin Kumar Behavior-Driven Development, Jatin Kumar Debugging, Jatin Kumar Performance Profiling, Jatin Kumar Memory Management, Jatin Kumar Concurrency, Jatin Kumar Multithreading, Jatin Kumar Asynchronous Programming, Jatin Kumar Event-Driven Architecture, Jatin Kumar Real-Time Systems, Jatin Kumar WebSockets, Jatin Kumar RESTful APIs, Jatin Kumar GraphQL, Jatin Kumar RPC, Jatin Kumar Webhooks, Jatin Kumar API Gateway, Jatin Parjapat Full Stack Web Developer, Jatin Parjapat Frontend Developer, Jatin Parjapat ReactJS Developer, Jatin Parjapat Backend Developer, Jatin Parjapat DevOps Engineer, Jatin Parjapat MERN Stack Developer, Jatin Parjapat HTML CSS JavaScript, Jatin Parjapat Node.js Developer, Jatin Parjapat Express.js Developer, Jatin Parjapat MongoDB Developer, Jatin Parjapat MariaDB Developer, Jatin Parjapat AlmaBetter Student, Jatin Parjapat Portfolio, Jatin Parjapat Projects, Jatin Parjapat Web Development, Jatin Parjapat Tech Skills, Jatin Parjapat Flipkart Clone, Jatin Parjapat Shaza Music Clone, Jatin Parjapat Quiz App, Jatin Parjapat Entertainment App, Jatin Parjapat Docker, Jatin Parjapat Jenkins, Jatin Parjapat CI/CD, Jatin Parjapat Cloud Computing, Jatin Parjapat Full Stack Projects, Jatin Parjapat Interactive Web Experiences, Jatin Parjapat User-friendly Web Development, Jatin Parjapat Digital Solutions, Jatin Parjapat Web Innovations, Jatin Parjapat AlmaBetter Developer, Jatin Parjapat GitHub, Jatin Parjapat LinkedIn, Jatin Parjapat Web Technologies, Jatin Parjapat Frontend Frameworks, Jatin Parjapat Server-side Technologies, Jatin Parjapat Dynamic Web Systems, Jatin Parjapat Web Applications, Jatin Parjapat Responsive Design, Jatin Parjapat Fast Load Times, Jatin Parjapat SEO Optimization," />
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
    <section id='About' className="">
    <div className=" relative mx-auto flex lg:gap-3 px-5 py-24 flex-col lg:flex-row items-center justify-center">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: `url(${aboutb.src})` }}
  />
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center">
    <Image
      width={200}
      height={150}
      className="md:w-[40%] hover:shadow-2xl cursor-pointer hover:shadow-blue-600 w-[60%] md:h-[70%] mb-10 rounded"
      alt="hero"
      src={aboutMe}
    />
    <div className="text-center w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Full Stack Web Developer
      </h1>
      <div className="mb-8 text-base md:text-xl leading-relaxed w-full">
        <p className="my-4 font-mono">
          Hello! I'm Jatin, a dedicated 20-year-old full-stack web developer and current student at AlmaBetter, specializing in the MERN stack. My expertise includes a strong foundation in <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="HTML">HTML</span>, <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="CSS">CSS</span>, and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="JavaScript">JavaScript</span>, complemented by advanced skills in frameworks such as <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="React Js">React Js</span> and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Next Js">Next.js</span>, as well as server-side technologies like <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Node Js">Node.js</span> and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Express JS">Express Js</span>.
          <br />
          In addition to my proficiency in these technologies, I am experienced in database management with both <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="MongoDB">MongoDB</span> and <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="MariaDB">MariaDB</span>. My development journey includes the creation of several impactful projects, such as a dynamic <Link title='Batch System' href="https://batch-system-smoky.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">Batch System</Link> and an <Link href="https://my-quiz-app-beta.vercel.app/" title='engaging Quiz App' className="border-b-4 border-slate-600 mx-1 font-medium">engaging Quiz App</Link>. These projects not only demonstrate my technical abilities but also highlight my commitment to delivering interactive and user-friendly web experiences.
          <br />
          Beyond these projects, I have also worked on a variety of applications, including a <span>Flipkart clone</span>, <Link title='Shaza music clone' href="https://shazam-music-app-redux-toolkit.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">Shaza music clone</Link>, <Link title='a quiz application' href="https://my-quiz-app-beta.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">a quiz application</Link>, and <Link title='an entertainment app' href="https://entertainment-frontend-one.vercel.app/" className="border-b-4 border-slate-600 mx-1 font-medium">an entertainment app</Link>. My technical toolkit extends to <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="DevOps">DevOps</span> knowledge with experience in <span className="border-b-4 mx-1 border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-700" title="Jenkins And Docker">Jenkins and Docker</span>, further enhancing my ability to build, deploy, and manage applications efficiently.
          <br />
          Join me as I continue to explore and innovate in the ever-evolving field of web development, striving to push the boundaries of what’s possible and deliver exceptional digital solutions.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-2">
        <Link title='Projects' href="/Routes/Projects" className="inline-flex mb-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:shadow-indigo-600 hover:shadow-2xl rounded text-lg">
          <WorkHistoryIcon className="mr-2" />Projects
        </Link>
        <Link title='Resume' href="/Routes/Resume" className="inline-flex mb-2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:shadow-blue-600 hover:shadow-2xl rounded text-lg">
          <FileOpenIcon className="mr-2" />Resume
        </Link>
        <Link title='Skills' href="/Routes/Skills" className="inline-flex mb-2 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:shadow-green-600 hover:shadow-2xl rounded text-lg">
          <PsychologyIcon className="mr-2" />Skills
        </Link>
        <Link title='Contect' href="/Routes/Contact" className="ml-4 mb-2 inline-flex text-gray-700 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:shadow-gray-600 hover:shadow-2xl rounded text-lg">
          <ContactMailIcon className="mr-2" />Contact
        </Link>
      </div>
    </div>
  </div>
</div>


</section>
    </>
  )
}

export default About
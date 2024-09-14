import Image from "next/image";
import { Inter } from "next/font/google";
import Skills from "./Routes/Skills";
import { Typewriter } from 'react-simple-typewriter';
import image1 from "@/public/image1.webp";
import Head from "next/head";
import { Element } from 'react-scroll';
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import Contect from "./Routes/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jatin Kumar's Portfolio</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Showcase of Jatin Kumar, a passionate web developer with expertise in modern technologies. Explore my portfolio to see my projects, skills, and resume. Let's connect and collaborate!"/>
        <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate"/>
        <meta name="keywords" content="web developer, portfolio, Jatin Kumar, programming, web design, front-end development, back-end development, technology, JavaScript, React, Next.js, development projects"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="English"/>
        <meta name="rating" content="General"/>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jatin Kumar's Portfolio"/>
        <meta property="og:description" content="Explore the portfolio of Jatin Kumar, a skilled web developer showcasing projects, skills, and professional achievements."/>
        <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>
        <meta property="og:url" content="https://my-portfolio-three-green.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Jatin Kumar's Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:image:alt" content="A snapshot of Jatin Kumar's portfolio site showcasing web development skills."/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Jatin Kumar's Portfolio"/>
        <meta name="twitter:description" content="Explore the portfolio of Jatin Kumar, a skilled web developer showcasing projects, skills, and professional achievements."/>
        <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"/>

        {/* Canonical Link */}
        <link rel="canonical" href="https://my-portfolio-three-green.vercel.app"/>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        {/* Alternate Links */}
        <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app"/>
        <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app"/>

        {/* Structured Data */}
        <script type="application/ld+json">
        {{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jatin Kumar",
          "url": "https://my-portfolio-three-green.vercel.app",
          "description": "Showcase of Jatin Kumar, a passionate web developer with expertise in modern technologies. Explore my portfolio to see my projects, skills, and resume.",
          "sameAs": [
               "https://www.linkedin.com/in/jatin-kumar/",
               "https://github.com/jatin-prajapt",
               "https://my-portfolio-three-green.vercel.app",
               "https://www.instagram.com/jatin_prajapat_ji/",
               "https://www.facebook.com/jatinparjapte.parjapte/"
          ]
        }}
        </script>

        {/* Additional Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="Jatin Kumar Portfolio"/>
        <meta name="application-name" content="Jatin Kumar Portfolio"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
      </Head>
      <Element name="home" className="w-full">
        <section id="home" className="w-full pt-24 h-[100vh] bg-center" style={{ backgroundImage: `url(${image1.src})` }}>
          <h1 className="flex justify-center md:justify-start relative top-36 md:text-3xl lg:text-5xl text-base sm:text-xl md:ml-20 sm:ml-10">
            Hey! I am Jatin Kumar
            <span className="text-blue-500 font-semibold">
              <Typewriter
                words={["<Frontend Developer/>", "<Backend Developer/>", "<Full Stack Web Developer/>", "<DevOps Engineer/>"]}
                loop={10}
                cursor
                cursorStyle="_|"
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </section>
      </Element>
      <Element name="about">
        <About/>
      </Element>
      <Element name="skills">
        <Skills/>
      </Element>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="contect">
        <Contect/>
      </Element>
    </>
  );
}

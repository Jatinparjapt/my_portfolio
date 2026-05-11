import Image from "next/image";
import { Inter } from "next/font/google";
import Skills from "./Routes/Skills";
import { Typewriter } from "react-simple-typewriter";
import Head from "next/head";
import { Element } from "react-scroll";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import Contect from "./Routes/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jatin Kumar's Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Showcase of Jatin Kumar, a passionate web developer with expertise in modern technologies. Explore my portfolio to see my projects, skills, and resume. Let's connect and collaborate!"
        />
        <meta
          name="author"
          content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="keywords" content="Jatin Kumar, Web Developer, Full Stack Developer, Next.js Developer, React, Node.js, MERN Stack, Frontend Developer, Backend Developer, AI Integrations, WebRTC, FastAPI" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jatin Kumar's Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Jatin Kumar, a skilled web developer showcasing projects, skills, and professional achievements."
        />
        <meta
          property="og:image"
          content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"
        />
        <meta
          property="og:url"
          content="https://my-portfolio-three-green.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jatin Kumar's Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image:alt"
          content="A snapshot of Jatin Kumar's portfolio site showcasing web development skills."
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jatin Kumar's Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Jatin Kumar, a skilled web developer showcasing projects, skills, and professional achievements."
        />
        <meta
          name="twitter:image"
          content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg"
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://my-portfolio-three-green.vercel.app"
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Alternate Links */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://my-portfolio-three-green.vercel.app"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://my-portfolio-three-green.vercel.app"
        />

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
                "https://www.linkedin.com/in/jatin-kumar/",
                "https://github.com/jatin-prajapt",
                "https://www.instagram.com/jatin_prajapat_ji/",
                "https://www.facebook.com/jatinparjapte.parjapte/"
              ],
            }),
          }}
        />

        {/* Additional Meta Tags */}
        <meta
          name="apple-mobile-web-app-title"
          content="Jatin Kumar Portfolio"
        />
        <meta name="application-name" content="Jatin Kumar Portfolio" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </Head>
      <Element name="home" className="w-full relative overflow-hidden">
        <section
          id="home"
          className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 relative"
        >
          {/* Parallax/Sticky Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: "url('/aboutB.jpg')" }}
          ></div>
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900 pointer-events-none"></div>

          <div className="z-10 flex flex-col items-center max-w-4xl">
            <div className="mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <h2 className="text-cyan-400 font-mono tracking-[0.2em] uppercase text-xs md:text-sm font-bold">
                Available for New Opportunities
              </h2>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight mb-6 drop-shadow-2xl">
              Hey! I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-indigo-600 animate-gradient">Jatin Kumar</span>
            </h1>
            
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 mb-8 min-h-[50px]">
              <span className="mr-3 text-slate-300 font-light">I build</span>
              <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                <Typewriter
                  words={[
                    "<Modern Web Apps/>",
                    "<AI Integrations/>",
                    "<Scalable Backends/>",
                    "<Real-time Systems/>",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10 opacity-90">
              Passionate <span className="text-white">Full Stack Developer</span> with 2+ years of experience crafting high-performance digital experiences. Specializing in React, Node.js, and building intelligent AI-powered solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)] flex items-center gap-2 group"
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('contect')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 hover:border-white/20 backdrop-blur-md"
              >
                Let's Talk
              </button>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-40">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contect">
        <Contect />
      </Element>
    </>
  );
}

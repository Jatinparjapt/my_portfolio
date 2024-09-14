import Image from "next/image";
import { Inter } from "next/font/google";
import Skills from "./Routes/Skills";
// import Blog from "./Routes/Blog";
import { Typewriter } from 'react-simple-typewriter'
import image1 from "@/public/image1.webp"
import Head from "next/head";
import { Element } from 'react-scroll';
import About from "./Routes/About";
import Projects from "./Routes/Projects"
import Contect from "./Routes/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
 <>
  <Head>
        <title>Home Page</title>
      </Head>
      <Element name="home" >
      <section id="home" >
      <div className="pt-24 h-[100vh] w-full object-contain bg-center " style={{ backgroundImage: `url(${image1.src})` }} >

<h1 className="flex  relative top-36 md:text-5xl text-2xl md:ml-20 ml-10 "> <pre>
  <h2> 
     Hey ! I am Jatin Kumar
    </h2>
 <span className="text-blue-500 font-semibold" >
<Typewriter
words={["<Frontend Developer\\>" , "<Backend Developer\\>"  ,"<Full Stack Web Developer\\>" , "<DevOps Engineer\\>"]}
loop={10}
cursor
cursorStyle="_|"
typeSpeed={65}
deleteSpeed={45}
delaySpeed={1000}

/>
 </span></pre>
   </h1>
<div className="flex justify-center" >


</div>
</div>
      </section>
      </Element>
      <Element name="about"  >

 <About/>
      </Element>
      <Element name="skills"  >
 <Skills/>
      </Element>
      <Element name="projects"  >

 <Projects/>
      </Element>
      <Element name="contect"  >

 <Contect/>
      </Element>
 {/* <Blog/> */}

 </>
  );
}

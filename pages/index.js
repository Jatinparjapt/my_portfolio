import Image from "next/image";
import { Inter } from "next/font/google";
import Skills from "./Routes/Skills";
import Blog from "./Routes/Blog";
import image1 from "@/public/image1.jpeg"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
 <>
 <div className="container mt-20  ">

 <h1 className="flex  text-4xl text-slate-500  justify-center  "> Hey ! I am Jatin ,Full Stack Web Devlopment </h1>
 
 <div className="flex justify-center" >
 <div  id="image" className="w-[60%] h-[50%]  ">

<Image src={image1} />

 </div>

</div>
</div>
 <Skills/>
 <Blog/>

 </>
  );
}

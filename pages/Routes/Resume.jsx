import React from "react";
import Image from "next/image";
import resume from "@/public/resume.jpg";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GetAppIcon from '@mui/icons-material/GetApp';
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import resumedownload from "@/public/resumeDownload.pdf"
import Link from "next/link";
const Resume = () => {
  const downloadFile = (event)=>{
    if(typeof window !== "undefined"){
      window.print()
    }
  }
  return (
    <>
      <div className="bg-slate-300  pb-[40rem]  ">
        <h1 className=" container text-4xl flex mt-20 justify-center">
          Resume/CV
        </h1>
        <div className=" container md:h-[100vh] md:w-[60%] flex justify-center  md:ml-60 ">
          <div className=" container mt-20 ml-16 mr-16 drop-shadow-2xl ">
            <div className="bg-gray-400 w-full py-5 ">
              <h1 className="text-4xl flex justify-center m-3 ">JATIN KUMAR</h1>
              <div className="flex justify-center m-2 mb-6 border-b-black border-t-black border-2 border-l-gray-400 border-r-gray-400  ">
                Full Stack Web Devlopment
              </div>
              <div className="flex place-content-around">
                <div>
                  <p className="ml-2">
                    <LocationOnIcon />
                  </p>
                  <span>! No Location 😉😉 </span>
                </div>
                <div>
                  <h5 className="ml-2">
                    <LocalPhoneIcon />
                  </h5>
                  <span> ! No information 😉😉 </span>
                </div>
                <div>
                  <h5 className="ml-2">
                    <LocalPostOfficeIcon />
                  </h5>
                  <span>jatin3961jk@gmail.com</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex">
              <div className="w-[40%] h-auto  bg-slate-200">
                <div className="h-40 w-[50%] ml-10 flex rounded-full justify-center bg-white m-2">
                  <Image
                    className="rounded-full flex justify-center "
                    src={resume}
                    alt="resume"
                  />
                </div>
                <div className="m-3">
                  <h3 className="text-xl border-b-black border-t-black border-2 border-l-gray-200 border-r-gray-200 ">
                    Education
                  </h3>
                  <div className="my-2">
                    <li>Secondary Education</li>
                    <h6 className="text-xs">Narula High School </h6>
                  </div>
                  <div className="my-2">
                    <li> Senior Secondary Education</li>
                    <h6 className="text-xs">Maa Sarswati Sr. Sec. School </h6>
                  </div>
                  <div className="my-2">
                    <li> BCA (Bachelor Of Computer Application)</li>
                    <h6 className="text-xs">Pt. Naki Ram Shrama Rohtak </h6>
                  </div>
                </div>
                <div className="m-3">
                  <h3 className="text-xl  border-b-black border-t-black border-2 border-l-gray-200 border-r-gray-200">
                    Links
                  </h3>

                  <a href="https://bestnewsworld.online">
                    https://bestnewsworld.online
                  </a>
                  <br />
                  <a href="https://www.myquizapp.xyz/">
                    https://www.myquizapp.xyz
                  </a>
                </div>
                <div className="m-3">
                  <h3 className="text-xl  border-b-black border-t-black border-2 border-l-gray-200 border-r-gray-200 ">
                    Skills
                  </h3>

                  <p>MERN Stack (Mongo , Expressjs , Reactjs , Nodejs)</p>
                </div>
                <div className="m-3">
                  <h3 className="text-xl  border-b-black border-t-black border-2 border-l-gray-200 border-r-gray-200 ">
                    
                    Personal Details
                  </h3>

                  <h4>Date Of Birth : 04 Oct 2003</h4>
                  <h3> Nationality : Indian</h3>
                </div>
              </div>
              <div className="w-[60%] h-full pb-[19rem] md:pd-[17rem] bg-slate-200">
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus veniam id ducimus soluta provident quam
                    repellat velit reiciendis facere. Praesentium hic nostrum
                    expedita voluptatibus, voluptate velit odit corrupti est
                    distinctio sapiente quasi modi cupiditate totam neque? Vitae
                    aspernatur laborum repellat odio fuga vel atque. Similique
                    ipsum iusto recusandae repudiandae magnam.
                  </p>
                </div>
                <div className="m-3">
                  <h3 className="text-xl  border-b-black border-t-black border-2 border-l-gray-200 border-r-gray-200 ">
                    Course
                  </h3>

                  <h6 className="">
                    Full Stack Web <b> Almabetter</b>
                  </h6>
                </div>
                <div className="m-3">
                  <h3 className="text-xl  border-b-black border-t-black border-2 border-l-gray-200 border-r-gray-200 ">
                    Certificates
                  </h3>
                  <h6 className="">

                    Full Stack Web <b> Almabetter</b>
                  </h6>
                </div>
                <div className="m-3">
                  <h3 className="text-xl  border-b-black border-t-black border-2 border-l-gray-200 border-r-gray-200">
                    Hobbies
                  </h3>
                  <li>Music</li>
                  <li>Coding</li>
                </div>
              </div>
            </div>
            <div className="container flex justify-start   mt-5 w-[60%] ">
              <Link href={"/resumeDownload.pdf"} download={"resume"} className="inline-flex mb-2 text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                <GetAppIcon className="mr-2" />
                Download
              </Link>
              <button onClick={downloadFile} download={"resume"} className="inline-flex mb-2 ml-3 text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                <GetAppIcon className="mr-2" />
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;

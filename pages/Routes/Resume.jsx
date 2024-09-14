import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import resume from '@/public/Jatin_Kumar.pdf'; // Ensure the path is correct
import Head from 'next/head';
import Link from 'next/link';
// PDF worker script configuration
const pdfWorkerUrl = "/pdf.worker.js";

const Resume = () => {
  const printPdf = () => {
    const printWindow = window.open(resume, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };
  return (
    <>
      <Head>
        <title>Resume Page</title>
      </Head>
      <div className="">
        <h1 className="container text-4xl flex pt-20 justify-center">
          Resume/CV
        </h1>
        <div className='  h-auto  mx-auto'>
          <Worker workerUrl={pdfWorkerUrl}>
            <Viewer fileUrl={resume} />
          </Worker>
        </div>
        <div className="flex place-content-around py-10  bg-white ">
          <Link href={resume}>
      <button className='bg-[#171750] px-4 py-2 text-xl rounded-md hover:shadow-2xl hover:shadow-blue-800  ' type="button">Download Resume</button>
          </Link>
      <button onClick={printPdf} className='bg-[#171750] px-4 py-2 text-xl rounded-md hover:shadow-2xl hover:shadow-blue-800  ' type="button">Print Resume</button>
      <Link href={"/"}  className='bg-[#171750] px-4 py-2 text-xl rounded-md hover:shadow-2xl hover:shadow-blue-800  ' type="button">Go Back </Link>

        </div>
      </div>
    </>
  );
};

export default Resume;

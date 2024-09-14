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
        <title>Resume | Jatin Kumar</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="View the detailed resume of Jatin Kumar, showcasing skills, experience, and educational background. Discover my professional journey and qualifications."/>
        <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate"/>
        <meta name="keywords" content="resume, Jatin Kumar, professional resume, CV, skills, experience, education, web developer resume, software engineer resume, portfolio"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="English"/>
        <meta name="rating" content="General"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Resume | Jatin Kumar"/>
        <meta property="og:description" content="View the detailed resume of Jatin Kumar, showcasing skills, experience, and educational background. Discover my professional journey and qualifications."/>
        <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/resume.jpg"/>
        <meta property="og:url" content="https://my-portfolio-three-green.vercel.app/resume"/>
        <meta property="og:type" content="profile"/>
        <meta property="og:site_name" content="Jatin Kumar's Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:image:alt" content="Detailed resume of Jatin Kumar showcasing professional qualifications and experience."/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Resume | Jatin Kumar"/>
        <meta name="twitter:description" content="View the detailed resume of Jatin Kumar, showcasing skills, experience, and educational background. Discover my professional journey and qualifications."/>
        <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/resume.jpg"/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>

        {/* Canonical Link */}
        <link rel="canonical" href="https://my-portfolio-three-green.vercel.app/resume"/>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        {/* Alternate Links */}
        <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app/resume"/>
        <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app/resume"/>

        {/* Structured Data */}
        <script type="application/ld+json">
        {{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jatin Kumar",
          "url": "https://my-portfolio-three-green.vercel.app/resume",
          "description": "Detailed resume of Jatin Kumar showcasing professional qualifications and experience.",
          "jobTitle": "Web Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          },
          "education": {
            "@type": "EducationalOrganization",
            "name": "Your University"
          },
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
        <meta name="apple-mobile-web-app-title" content="Resume"/>
        <meta name="application-name" content="Resume"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta property="article:published_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:modified_time" content="2024-09-14T00:00:00Z"/>
        <meta property="article:author" content="Jatin Kumar"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:secure_url" content="https://my-portfolio-three-green.vercel.app/resume.jpg"/>
        <meta property="og:video" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="1200"/>
        <meta property="og:video:height" content="630"/>
        <meta property="og:audio" content="https://youtube.com/shorts/FozUsUsdTzQ?feature=share"/>
        <meta property="og:audio:type" content="audio/mpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="Detailed resume of Jatin Kumar showcasing professional qualifications and experience."/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:creator" content="@yourtwitterhandle"/>
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

// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Hello! I'm Jatin, a dedicated 20-year-old full-stack web developer and current student at AlmaBetter, specializing in the MERN stack. My expertise includes a strong foundation in HTML, CSS, and JavaScript, complemented by advanced skills in frameworks such as React Js and Next.js, as well as server-side technologies like Node.js and Express Js. In addition to my proficiency in these technologies, I am experienced in database management with both MongoDB and MariaDB. My development journey includes the creation of several impactful projects, such as a dynamic Batch System and an engaging Quiz App. These projects not only demonstrate my technical abilities but also highlight my commitment to delivering interactive and user-friendly web experiences. Beyond these projects, I have also worked on a variety of applications, including a Flipkart clone, Shaza music clone, a quiz application, and an entertainment app. My technical toolkit extends to DevOps knowledge with experience in Jenkins and Docker, further enhancing my ability to build, deploy, and manage applications efficiently. Join me as I continue to explore and innovate in the ever-evolving field of web development, striving to push the boundaries of what’s possible and deliver exceptional digital solutions."
          />
          <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji" />
          <meta name="robots" content="index, follow" />
          <meta name="google" content="notranslate" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://my-portfolio-three-green.vercel.app" />
          <meta property="og:title" content="Portfolio, my-portfolio-three-green.vercel.app" />
          <meta property="og:description" content="Your portfolio site description" />
          <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg" />
          <meta property="og:url" content="https://my-portfolio-three-green.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="My-portfolio, my-portfolio-three-green.vercel.app" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio" />
          <meta name="twitter:description" content="Your portfolio site description" />
          <meta name="twitter:image" content="https://your-site-url.com/twitter-image.jpg" />
          <meta name="twitter:site" content="@yourtwitterhandle" />
          <meta name="twitter:creator" content="@yourtwitterhandle" />
          <link rel="alternate" hreflang="en" href="https://my-portfolio-three-green.vercel.app" />
          <link rel="alternate" hreflang="x-default" href="https://my-portfolio-three-green.vercel.app" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

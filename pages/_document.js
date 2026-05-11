// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_MEASUREMENT_ID } from '../lib/gtag';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Full Stack Developer with 2+ years of experience specializing in the MERN stack. Expert in building modern web applications, AI-powered tools, and real-time communication platforms."
          />
          <meta name="keywords" content="Jatin Kumar, Web Developer, Full Stack Developer, Next.js Developer, React, Node.js, MERN Stack, Frontend Developer, Backend Developer, AI Integrations, WebRTC, FastAPI" />
          <meta name="author" content="Jatin Kumar, Jatin, Jatin Parjapat, jatin_prajapt_ji" />
          <meta name="robots" content="index, follow" />
          <meta name="google" content="notranslate" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://my-portfolio-three-green.vercel.app" />
          <meta property="og:title" content="Jatin Kumar's Portfolio" />
          <meta property="og:description" content="Professional Web Developer Portfolio of Jatin Kumar" />
          <meta property="og:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg" />
          <meta property="og:url" content="https://my-portfolio-three-green.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Jatin Kumar's Portfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jatin Kumar's Portfolio" />
          <meta name="twitter:description" content="Professional Web Developer Portfolio of Jatin Kumar" />
          <meta name="twitter:image" content="https://my-portfolio-three-green.vercel.app/aboutMe2.jpg" />
          <meta name="twitter:site" content="@jatin_prajapt" />
          <meta name="twitter:creator" content="@jatin_prajapt" />
          <link rel="alternate" hrefLang="en" href="https://my-portfolio-three-green.vercel.app" />
          <link rel="alternate" hrefLang="x-default" href="https://my-portfolio-three-green.vercel.app" />
          {/* Google AdSense Script */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7503950851158024"
            crossorigin="anonymous"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FKE6Z8VBKB"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FKE6Z8VBKB', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />


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

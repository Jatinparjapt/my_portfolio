import "@/styles/globals.css";
import Footer from "./HeaderFooter/Footer";
import Header from "./HeaderFooter/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Provider } from 'react-redux';
import {store} from "@/lib/store"
import Script from "next/script"; // ✅ Import Script from next

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // ✅ Google Analytics: track route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", "G-FKE6Z8VBKB", {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* ✅ Google AdSense Script */}
      {/* <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7503950851158024"
        crossOrigin="anonymous"
      /> */}

      {/* ✅ Optional: Google Analytics gtag script (if not already in _document.js) */}
     

      {/* ✅ Layout */}

<Provider store={store} >
      <Header />
      <Component {...pageProps} />
      <Footer />
</Provider>
    </>
  );
}

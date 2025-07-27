import "@/styles/globals.css";
import Footer from "./HeaderFooter/Footer";
import Header from "./HeaderFooter/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const router = useRouter();
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
  return(
    <> 
    <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

import "@/styles/globals.css";
import Footer from "./HeaderFooter/Footer";
import Header from "./HeaderFooter/Header";
export default function App({ Component, pageProps }) {
  return(
    <> 
    <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

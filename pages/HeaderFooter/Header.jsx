import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import NextLink from 'next/link';
import resume from '@/public/Jatin_Kumar.pdf';
function Header(props) {
  const [showHamburgar, setShowHamburgar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
 const changeHamburgar = ()=>{
  setShowHamburgar((prevValue) => !prevValue);
 }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`py-5 rounded-md z-30 shadow-2xl fixed w-full transition-colors duration-300 ${
          scrolled ? "bg-[#06043E]" : "bg-transparent"
        }`}
      >
        <nav>
          <div className="flex md:place-content-around place-content-between mx-6 ">
            <Link
            title="Home"
             activeclass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 cursor-pointer px-4 border-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50 "
            >
              <div>
                <span className=" font-semibold">
                  {"<"}
                  <Typewriter
                    words={[
                      "Code = Love ❤️",
                      "Code != Love❤️",
                      "Code = Life ❤️",
                      "Code != Life❤️",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={65}
                    deleteSpeed={45}
                    delaySpeed={1000}
                  />{" "}
                  {"/>"}
                </span>
              </div>
            </Link>
            <div className="flex cursor-pointer md:hidden items-center">
              <button title="Menu" className={"hover:text-blue-500"} type="button">
                {showHamburgar ? (
                  <RxHamburgerMenu
                    onClick={() => setShowHamburgar(false)}
                    className="text-3xl"
                  />
                ) : (
                  <RiCloseLargeLine
                    onClick={() => setShowHamburgar(true)}
                    className="text-3xl"
                  />
                )}
              </button>
            </div>

            <ul className="hidden md:flex md:gap-9 items-center cursor-pointer  font-medium ">
              <Link 
              title="About"
               activeclass="active"
                to="about"
                offset={50}
                duration={500}
                spy={true}
                smooth={true}
                className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                About Me
              </Link>
              <Link
              title="Projects"
               activeclass="active"
                to="projects"
                offset={50}
                duration={500}
                spy={true}
                smooth={true}
                className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Projects
              </Link>
              <Link
              title="Skills"
               activeclass="active"
                to="skills"
                offset={50}
                duration={500}
                spy={true}
                smooth={true}
                className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Skills
              </Link>
              <NextLink
               title="Resume"
                href="/Routes/Resume"
                className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Resume
              </NextLink>
              <Link
              title="Contact"
               activeclass="active"
                to="contact"
                offset={50}
                duration={500}
                spy={true}
                smooth={true}
                className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Contact
              </Link>
            </ul>
            <NextLink title="Download Resume" href={resume} className="rounded-full hidden cursor-pointer px-4 md:flex  items-center bg-blue-500 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600  ">
              <button>Download</button>
            </NextLink>
          </div>
          {/* for small scren size */}

          <ul 
            className={`${
              showHamburgar ? "hidden" : "flex"
            } flex-col gap-3 text-xl font-medium cursor-pointer items-center mt-4 `}
          >
            <Link onClick={changeHamburgar}
             activeclass="active"
             title="About Me"
              to="about"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              About Me
            </Link>
            <Link onClick={changeHamburgar}
             activeclass="active"
             title="Projects"
              to="projects"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              Projects
            </Link>
            <Link onClick={changeHamburgar}
             activeclass="active"
             title="Skills"
              to="skills"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              Skills
            </Link>
            <NextLink onClick={changeHamburgar}
             title="Resume"
              href="/Routes/Resume"
              
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              Resume
            </NextLink>
            <Link onClick={changeHamburgar}
             activeclass="active"
             title="Contact"
              to="contect"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              Contact
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

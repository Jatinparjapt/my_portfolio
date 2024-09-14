import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
// import Link from 'next/link';

function Header(props) {
  const [showHamburgar, setShowHamburgar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

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
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 cursor-pointer px-4 border-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50 "
            >
              <button>
                <span className=" font-semibold">
                  {"<"}
                  <Typewriter
                    words={[
                      "Code = Love ❤️",
                      "Code != Love ❤️ ",
                      "Code = Life ❤️",
                      "Code != Life ❤️ ",
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
              </button>
            </Link>
            <div className="flex cursor-pointer md:hidden items-center">
              <button className={"hover:text-blue-500"} type="button">
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
                activeClass="active"
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
                activeClass="active"
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
                activeClass="active"
                to="skills"
                offset={50}
                duration={500}
                spy={true}
                smooth={true}
                className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Skills
              </Link>
              <Link
                activeClass="active"
                to="/Routes/Resume"
                offset={50}
                duration={500}
                spy={true}
                smooth={true}
                className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Resume
              </Link>
              <Link
                activeClass="active"
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
            <div className="rounded-full hidden cursor-pointer px-4 md:flex  items-center bg-blue-500 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600  ">
              <button>Download</button>
            </div>
          </div>
          {/* for small scren size */}

          <ul
            className={`${
              showHamburgar ? "hidden" : "flex"
            } flex-col gap-3 text-xl font-medium cursor-pointer items-center mt-4 `}
          >
            <Link
              activeClass="active"
              to="about"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              About Me
            </Link>
            <Link
              activeClass="active"
              to="projects"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="skills"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="/Routes/Resume"
              offset={50}
              duration={500}
              spy={true}
              smooth={true}
              className="hover:text-blue-300 hover:border-b-2 outline-gray-100 "
            >
              Resume
            </Link>
            <Link
              activeClass="active"
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

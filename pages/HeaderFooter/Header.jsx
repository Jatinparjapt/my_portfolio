import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import resume from "@/public/Jatin_Kumar.pdf";

const NavItem = ({ to, title, children, onClick }) => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <ScrollLink
        title={title}
        activeClass="active"
        to={to}
        offset={-70}
        duration={500}
        spy={true}
        smooth={true}
        onClick={onClick}
        className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer"
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <NextLink
      title={title}
      href={`/#${to}`}
      onClick={onClick}
      className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
    >
      {children}
    </NextLink>
  );
};

function Header() {
  const [showHamburgar, setShowHamburgar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const changeHamburgar = () => setShowHamburgar((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`py-5 rounded-md z-30 shadow-2xl fixed w-full transition-colors duration-300 ${scrolled ? "bg-[#06043E]" : "bg-transparent"}`}>
      <nav>
        <div className="flex md:place-content-around place-content-between mx-6">
          <ScrollLink
            title="Home"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="py-2 cursor-pointer px-4 border-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="font-semibold">
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
          </ScrollLink>

          <div className="flex cursor-pointer md:hidden items-center">
            <button title="Menu" className="hover:text-blue-500" type="button">
              {showHamburgar ? (
                <RxHamburgerMenu onClick={() => setShowHamburgar(false)} className="text-3xl" />
              ) : (
                <RiCloseLargeLine onClick={() => setShowHamburgar(true)} className="text-3xl" />
              )}
            </button>
          </div>

          <ul className="hidden md:flex md:gap-9 items-center font-medium">
            <NavItem to="about" title="About">About Me</NavItem>
            <NavItem to="projects" title="Projects">Projects</NavItem>
            <NavItem to="skills" title="Skills">Skills</NavItem>
            <NextLink
              title="Resume"
              href="/Routes/Resume"
              className="hover:text-blue-300 hover:border-b-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              Resume
            </NextLink>
            <NavItem to="contact" title="Contact">Contact</NavItem>
          </ul>

          <NextLink
            title="Download Resume"
            href={resume}
            className="rounded-full hidden md:flex items-center bg-blue-500 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600 px-4 cursor-pointer"
          >
            <button>Download</button>
          </NextLink>
        </div>

        {/* Mobile menu */}
        <ul className={`${showHamburgar ? "hidden" : "flex"} flex-col gap-3 text-xl font-medium items-center mt-4`}>
          <NavItem to="about" title="About Me" onClick={changeHamburgar}>About Me</NavItem>
          <NavItem to="projects" title="Projects" onClick={changeHamburgar}>Projects</NavItem>
          <NavItem to="skills" title="Skills" onClick={changeHamburgar}>Skills</NavItem>
          <NextLink
            title="Resume"
            href="/Routes/Resume"
            onClick={changeHamburgar}
            className="hover:text-blue-300 hover:border-b-2 outline-gray-100"
          >
            Resume
          </NextLink>
          <NavItem to="contact" title="Contact" onClick={changeHamburgar}>Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

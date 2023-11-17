"use client";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = usePathname();

  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColour] = useState(false);

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 1) {
        setColour(true);
      } else {
        setColour(false);
      }
    };

    window.addEventListener("scroll", changeColour);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColour);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link href="/">
        <h1 className="text-3xl">Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link href="/" className={location === "/" ? "nav-active" : null}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={location === "/contact" ? "nav-active" : null}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={location === "/about" ? "nav-active" : null}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={location === "/projects" ? "nav-active" : null}
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

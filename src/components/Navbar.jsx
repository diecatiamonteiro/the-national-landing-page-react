import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // On home page, wait until scroll passes viewport height
        setIsScrolled(window.scrollY > window.innerHeight);
      } else {
        // On other pages, apply effect as soon as scrolling starts
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset"; // Prevent scrolling when menu is open
  };

  return (
    <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-header !leading-tight text-lg lg:text-xl xl:text-2xl">
        <NavLink to="/" onClick={scrollToTop}>
          <h1>
            THE <br />
            NATIONAL
          </h1>
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-8 right-8 w-10 h-10 flex items-center justify-center z-50 bg-transparent outline-none focus:outline-none active:outline-none focus:ring-0 focus:border-0 focus:border-b-[3px] focus:border-b-transparent"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Horizontal line */}
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "rotate-0"
            }`}
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
          />
          {/* Vertical line */}
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "rotate-90"
            }`}
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
          />
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="nav-links items-center !hidden md:!flex">
        <NavLink to="/" onClick={scrollToTop}>
          Band
        </NavLink>
        <NavLink to="/members" onClick={scrollToTop}>
          Members
        </NavLink>
        <NavLink to="/music" onClick={scrollToTop}>
          Music
        </NavLink>
        <NavLink to="/tour" onClick={scrollToTop}>
          Tour
        </NavLink>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[#141414] transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center text-white h-full space-y-8 text-2xl">
          <NavLink
            to="/"
            onClick={() => {
              scrollToTop();
              toggleMenu();
            }}
          >
            Band
          </NavLink>
          <NavLink
            to="/members"
            onClick={() => {
              scrollToTop();
              toggleMenu();
            }}
          >
            Members
          </NavLink>
          <NavLink
            to="/music"
            onClick={() => {
              scrollToTop();
              toggleMenu();
            }}
          >
            Music
          </NavLink>
          <NavLink
            to="/tour"
            onClick={() => {
              scrollToTop();
              toggleMenu();
            }}
          >
            Tour
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

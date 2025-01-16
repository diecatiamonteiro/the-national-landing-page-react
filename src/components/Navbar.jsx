import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-header">
        <NavLink to="/" onClick={scrollToTop}>
          <h1>
            THE <br />
            NATIONAL
          </h1>
        </NavLink>
      </div>
      <nav className="nav-links">
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
    </div>
  );
}

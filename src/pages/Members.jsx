import { useEffect } from "react";
import { NavLink, useParams, Outlet, useNavigate } from "react-router-dom";
import "./Members.css";

export default function Members() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the first member if no ID is present
    if (!id) {
      navigate("/members/mattberninger");
    }
  }, [id, navigate]);

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="page-content">
        <nav className="members-list">
          <NavLink to="/members/mattberninger" onClick={scrollToTop}>
            Matt Berninger
          </NavLink>
          <NavLink to="/members/aarondessner" onClick={scrollToTop}>
            Aaron Dessner
          </NavLink>
          <NavLink to="/members/brycedessner" onClick={scrollToTop}>
            Bryce Dessner
          </NavLink>
          <NavLink to="/members/scottdevendorf" onClick={scrollToTop}>
            Scott Devendorf
          </NavLink>
          <NavLink to="/members/bryandevendorf" onClick={scrollToTop}>
            Bryan Devendorf
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

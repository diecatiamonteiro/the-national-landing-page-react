import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet, useNavigate } from "react-router-dom";
import "./Members.css";

export default function Members() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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

  const members = [
    { id: "mattberninger", name: "Matt Berninger" },
    { id: "aarondessner", name: "Aaron Dessner" },
    { id: "brycedessner", name: "Bryce Dessner" },
    { id: "scottdevendorf", name: "Scott Devendorf" },
    { id: "bryandevendorf", name: "Bryan Devendorf" },
  ];

  const currentMember =
    members.find((member) => member.id === id) || members[0];

  return (
    <>
      <div className="page-content">
        {/* Mobile Custom Dropdown */}
        <div className="sm:hidden w-full flex justify-center relative">
          <div className="w-1/2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-[#141414] text-white text-center px-4 py-2 rounded-none
                         border-0 border-b-[3px] border-b-white 
                         focus:outline-none focus:ring-0
                         focus:border-0 focus:border-b-[3px] focus:border-b-white
                         flex items-center justify-between"
            >
              {currentMember.name}
              <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="absolute w-1/2 left-1/4 mt-1 bg-[#141414] border border-zinc-800">
                {members.map((member) => (
                  <button
                    key={member.id}
                    className="w-full text-white text-center px-4 py-2"
                    onClick={() => {
                      navigate(`/members/${member.id}`);
                      scrollToTop();
                      setIsOpen(false);
                    }}
                  >
                    {member.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Members Navigation */}
        <nav className="hidden sm:flex flex-wrap justify-center items-center gap-4 lg:gap-8 xl:gap-16 pt-5 pb-6  text-xl xl:text-2xl tracking-tight xl:tracking-normal">
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

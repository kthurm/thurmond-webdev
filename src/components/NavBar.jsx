import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import SocialSideNav from "./SocialSideNav";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const refOne = useRef(null);
  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="sticky top-0 w-full bg-accent text-light border-b border-midtone shadow-xl z-10">
      <div className="navbar w-full mx-auto flex justify-between items-center py-1 px-5">
        <Link
          className="text-lg cursor-pointer "
          to="home"
          smooth={true}
          offset={-90}
          duration={500}
        >
          KT
        </Link>
        <div ref={refOne}>
          {/* hambuger */}
          <div onClick={handleClick} className="md:hidden">
            {!isOpen ? <HiMenuAlt3 size={30} /> : <HiX size={30} />}
          </div>

          <div
            className={
              !isOpen
                ? "hidden md:flex"
                : "md:relative absolute top-[39px] md:top-0 right-0 bg-light md:bg-transparent text-dark md:text-light shadow-2xl md:shadow-none px-5 md:px-0 py-3 md:py-0 rounded-b-lg md:rounded-none text-right"
            }
          >
            <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 uppercase text-sm">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  smooth={true}
                  offset={-90}
                  duration={500}
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  activeClass="active"
                  to="skills"
                  smooth={true}
                  offset={-60}
                  duration={500}
                  onClick={handleClick}
                >
                  Skills
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  activeClass="active"
                  to="work"
                  smooth={true}
                  offset={-60}
                  duration={500}
                  onClick={handleClick}
                >
                  Work
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  offset={-60}
                  duration={500}
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SocialSideNav className="hidden lg:flex" />
    </div>
  );
}

export default NavBar;

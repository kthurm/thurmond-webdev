import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import SocialSideNav from "./SocialSideNav";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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

        {/* hambuger */}
        <div onClick={handleClick} className="md:hidden">
          {!nav ? <HiMenuAlt3 size={30} /> : <HiX size={30} />}
        </div>
        {/* mobile nac */}
        <div
          className={
            !nav
              ? "hidden md:flex"
              : "md:relative absolute top-[40px] right-0 bg-light text-dark shadow-2xl px-5 py-3 rounded-b-lg text-right"
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
      <SocialSideNav className="hidden md:flex" />
    </div>
  );
}

export default NavBar;

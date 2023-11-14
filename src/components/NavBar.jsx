import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import NavBarItems from "./navBarItems";
import SocialSideNav from "./SocialSideNav";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbar sticky top-0 w-full bg-accent text-light border-b border-midtone shadow-xl z-10">
      <div className="w-full mx-auto flex justify-between items-center py-1 px-5">
        <div className="text-lg">kt</div>
        <ul className="hidden md:flex space-x-5 uppercase text-sm">
          <NavBarItems />
        </ul>

        {/* hambuger */}
        <div onClick={handleClick} className="md:hidden">
          {!nav ? <HiMenuAlt3 size={30} /> : <HiX size={30} />}
        </div>
        {/* mobile nac */}
        <div
          className={
            !nav
              ? "hidden"
              : "md:hidden absolute top-[40px] right-0 bg-light text-dark shadow-2xl px-5 py-3 rounded-b-lg text-right"
          }
        >
          <ul className="flex flex-col space-y-5 uppercase text-sm">
            <NavBarItems />
          </ul>
        </div>
        <SocialSideNav />
      </div>
    </div>
  );
}

export default NavBar;

import { useState } from "react";
import { Link } from "react-scroll";

function NavBarMobile() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
}

export const NavBarItems = () => {
  return (
    <>
      <li>
        <Link
          activeClass="active"
          to="home"
          smooth={true}
          offset={-90}
          duration={500}
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
          offset={-40}
          duration={500}
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
          offset={-40}
          duration={500}
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
          offset={-40}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </>
  );
};

export default NavBarItems;

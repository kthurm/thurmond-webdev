import React from "react";
import SocialSideNav from "./SocialSideNav";

const Footer = () => {
  return (
    <div className="bg-dark/80 flex items-center justify-between lg:flex-row-reverse">
      <div className="py-7 px-5 lg:mt-5 text-light/50 uppercase text-xs">
        @ Kara Thurmond
      </div>
      <SocialSideNav className="md:hidden" />
    </div>
  );
};

export default Footer;

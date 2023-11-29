import { HiMiniPaperClip } from "react-icons/hi2";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const SocialSideNav = ({ className = "" }) => {
  return (
    <ul
      className={`lg:fixed bg-midtone lg:bg-transparent rounded-l lg:rounded-none flex flex-row lg:flex-col lg:top-[40%] lg:left-5 lg:space-y-4 p-2 lg:p-0 ${className}`}
    >
      <li className="mr-4 pl-1 lg:-ml-[85px] lg:hover:-ml-[18px] duration-300">
        <a
          className="flex items-center hover:text-accent lg:hover:text-light"
          href="https://www.linkedin.com/in/karathurmond/"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="hidden lg:block pr-1.5 pt-0.5">LinkedIn</div>
          <div>
            <SlSocialLinkedin size={30} />
          </div>
        </a>
      </li>
      <li className="mr-4 pl-1 lg:-ml-[97px] lg:hover:-ml-[18px] duration-300">
        <a
          className="flex items-center hover:text-accent lg:hover:text-light"
          href="https://www.instagram.com/karathurmond/"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="hidden lg:block pr-1.5 pt-0.5">Instagram</div>
          <div>
            <SlSocialInstagram size={30} />
          </div>
        </a>
      </li>
      <li className="lg:mr-4 pl-1 lg:-ml-[82px] lg:hover:-ml-[18px] duration-300">
        <a
          className="flex items-center hover:text-accent lg:hover:text-light"
          target="_blank"
          href="/kthurmond-resume.pdf"
        >
          <div className="hidden lg:block pr-1.5 pt-0.5">Resume</div>
          <div>
            <HiMiniPaperClip size={30} />
          </div>
        </a>
      </li>
    </ul>
  );
};

export default SocialSideNav;

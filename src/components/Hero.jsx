import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="max-w-screen-lg mx-auto">
      <div className="w-full mt-4 flex flex-col px-5 lg:px-[120px] xl:px-24 text-light">
        <h1 className="text-6xl lg:text-7xl">Kara Thurmond</h1>
        <h2 className="text-4xl lg:text-5xl opacity-70">
          Senior Front-end Web Developer
        </h2>
        <p className="text-4xl lg:text-5xl opacity-40 lg:pr-5">
          I am a web developer with 15+ years of experience developing and
          maintaining websites. Originally trained as a graphic designer, I
          create pixel-perfect sites that expertly bring UI/UX designers&#8217;
          visions to screens.
        </p>

        <Link
          activeClass="active"
          to="work"
          smooth={true}
          offset={-40}
          duration={500}
        >
          <button className="my-6 w-fit flex group items-center  hover:border-accent rounded-full py-3 px-4 border border-white text-light hover:text-accent font-semibold">
            <span className="pr-0.5">View Work</span>
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

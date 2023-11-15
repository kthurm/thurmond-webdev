import PropTypes from "prop-types";
import { useState } from "react";

function Card(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      className="card relative bg-accent rounded-md shadow-xl flex flex-col overflow-hidden cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        className="flex items-start object-cover object-top h-[300px]"
        src={props.imgSrc}
        alt={props.title}
      />

      <div
        className={
          isHovering
            ? "opacity-100 absolute bg-accent w-full h-full transition duration-500"
            : "opacity-0 absolute w-full h-full transition duration-300"
        }
      >
        <div className="flex flex-col h-full w-full justify-center items-center text-center">
          <div className="word-space py-3 px-2 text-lg font-bold">
            {props.description}
          </div>
          <a
            className="my-6 w-fit flex group items-center bg-dark hover:bg-accent rounded-full py-3 px-4 border border-white text-light font-semibold"
            href={props.link}
          >
            Demo Project
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};
export default Card;

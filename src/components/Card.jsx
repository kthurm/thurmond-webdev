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
      className="card relative rounded shadow-lg flex flex-col overflow-hidden cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        className="flex items-start object-cover object-top h-[300px]"
        src={props.imgSrc}
        alt={props.title}
      />
      <div className="word-space py-5 px-2 text-xs uppercase font-bold text-center text-accent">
        {props.description}
      </div>

      <div
        className={
          isHovering
            ? "transition duration-500 card-overlay absolute px-5 pb-2 pt-7 bg-accent opacity-100 font-light text-sm leading-[17px] text-left"
            : "opacity-0 hidden"
        }
      >
        <div className="flex flex-col justify-between">
          <span className="inline text-light font-bold mr-1">
            {props.title}
          </span>
        </div>

        <div></div>
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

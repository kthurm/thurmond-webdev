import Card from "./Card";
import { projects } from "../data";

const Work = () => {
  return (
    <div name="work" className="text-light px-5 lg:pl-[120px] xl:pl-24">
      <h1 className="text-3xl md:text-5xl py-2">Work</h1>
      <p className="text-xl md:text-2xl opacity-40">
        Projects I&#8217;ve work on:
      </p>
      <div className="my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map(({ id, imgSrc, description, imgAlt, link, title }) => {
          return (
            <Card
              key={id}
              imgSrc={imgSrc}
              description={description}
              imgAlt={imgAlt}
              link={link}
              title={title}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Work;

import { DefaultTimeline } from "./Mission";
import Team from "./Team";
import Who from "./Who";

const About = () => {
  return (
    <div className="my-12 md:my-24 ">
      <Who></Who>
      <div className="bg-[#f5f5f5]  pt-4 pb-20  ">
        <h1 className="text-3xl md:text-5xl text-center my-10 md:my-20 font-semibold">
          Our Mission
        </h1>
        <DefaultTimeline></DefaultTimeline>
      </div>
      <Team></Team>
    </div>
  );
};

export default About;

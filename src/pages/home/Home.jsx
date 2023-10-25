import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import { Services } from "./Services";
import Features from "./Features";
import Speakers from "./Speakers";
import Testimonial from "../../components/testimonial/Testimonial";
import Client from "./Client";

const Home = () => {
  const { services } = useLoaderData();
  console.log(services);

  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>

      <div className="mt-28 mb-16 mx-4">
        <h1 className="text-center text-4xl md:text-6xl font-semibold">
          Spearkers
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mx-auto max-w-screen-2xl py-20">
          {services.map((card, index) => (
            <Services key={index} card={card}></Services>
          ))}
        </div>
      </div>

      <Features></Features>
      <Speakers></Speakers>
      <Testimonial></Testimonial>
      <Client></Client>
    </div>
  );
};

export default Home;

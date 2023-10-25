import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Testimonial from "../../components/testimonial/Testimonial";
import Client from "./Client";

const Details = () => {
  const { id } = useParams();
  const { services } = useLoaderData();
  const [servicesD, setServicesD] = useState([]);
  useEffect(() => {
    const detailsFind = services.find((details) => details._id == id);
    setServicesD(detailsFind);
  }, []);
  const { img, title, para, duration, name, place, price } = servicesD;
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img className="rounded-xl" src={img} alt="Image Description" />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0 border-l-2 pl-4">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  {title}
                </h2>
                <p className="text-gray-500">{para}</p>
              </div>

              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold text-black">Mentor:</span> {name}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold text-black">Duration:</span>{" "}
                    {duration}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold text-black">Venue:</span> {place}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold text-black">Price:</span> {price}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Testimonial></Testimonial>
      <Client> </Client>
    </>
  );
};

export default Details;

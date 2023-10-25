import {
  FaCalendarDays,
  FaLocationDot,
  FaMicrophone,
  FaChampagneGlasses,
} from "react-icons/fa6";
const Features = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" max-w-screen-2xl mx-auto  py-10   my-24 px-3 text-center">
        <h1
          className="text-4xl md:text-6xl text-center font-semibold  my-10
      "
        >
          Features
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col flex-wrap justify-center items-center">
            <FaCalendarDays className="text-white  text-3xl md:text-5xl border-0  bg-black   rounded-full p-2 " />
            <div className="my-5">
              <h3 className="text-2xl md:text-2 font-semibold">
                7/24 ALL DAY EVENT
              </h3>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaLocationDot className="text-white  text-3xl md:text-5xl border-0  bg-black rounded-full p-2" />
            <div className="my-5">
              <h3 className="text-2xl md:text-2 font-semibold">GREAT VENUES</h3>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaMicrophone className="text-white text-3xl  md:text-5xl border-0  bg-black rounded-full p-2 " />
            <div className="my-5">
              <h3 className="text-2xl md:text-2 font-semibold">
                TOP 5 SPEAKERS
              </h3>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaChampagneGlasses className="text-white  text-3xl md:text-5xl border-0  bg-black  rounded-full p-2" />
            <div className="my-5">
              <h3 className="text-2xl md:text-2 font-semibold">
                GET PARTY AFTER EVENT
              </h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

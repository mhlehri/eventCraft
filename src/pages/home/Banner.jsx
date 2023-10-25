import imgMask from "./home.css";
const Banner = () => {
  return (
    <div className=" h-[80vh] bg-no-repeat bg-cover bg-bottom bg-[url('https://i.ibb.co/kGtJskf/jakob-dalbjorn-cu-KJre3ny-Yc-unsplash.jpg')]  ">
      <div className="w-full h-full flex justify-center items-center bg-white/80">
        <div className="text-center space-y-4 ">
          <h3 className="text-3xl md:text-6xl font-semibold">EventCrafters</h3>
          <h1 className="text-xl md:text-4xl">
            We make all kinds of corporate events
          </h1>
          <p className="text-lg md:text-xl">Since 2013</p>
        </div>
        <div className="imgMask drop-shadow-md hidden xl:block">
          <img
            src="https://i.ibb.co/6Rg7QwX/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

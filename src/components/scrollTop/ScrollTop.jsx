import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  return (
    <div
      className={`absolute z-20 flex items-center justify-center md:justify-end w-full bottom-12 md:flex-none md:right-3 2xl:right-48  lg:bottom-48  cursor-pointer ${
        visible ? "block" : "hidden"
      }`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaAngleUp className=" bg-gray-700 text-white h-10 p-2 w-10 fixed rounded-full "></FaAngleUp>
    </div>
  );
};

export default ScrollTop;

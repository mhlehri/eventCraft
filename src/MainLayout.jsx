import { Outlet } from "react-router-dom";
import { StickyNavbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <StickyNavbar></StickyNavbar>
      <Outlet></Outlet>
      <ScrollTop></ScrollTop>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;

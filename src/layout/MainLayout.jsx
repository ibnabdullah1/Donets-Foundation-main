import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px]  mx-auto">
      <StickyNavbar></StickyNavbar>
      <div className="pb-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

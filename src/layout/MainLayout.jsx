import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px]  mx-auto">
      <Navbar></Navbar>
      <div className="pb-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

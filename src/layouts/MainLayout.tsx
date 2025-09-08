import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

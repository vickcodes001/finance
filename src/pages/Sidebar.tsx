import { Link, useLocation } from "react-router-dom";
import { MdHome, MdOutlineBatteryChargingFull } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoPieChart } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { PiArrowFatLineLeftFill, PiArrowFatLineRightFill } from "react-icons/pi";
import { useState } from "react";

const linkStyling =
  "flex items-center lg:pl-6 py-1 gap-2 rounded-r-md text-3xl lg:text-[14px] lg:h-10 hover:bg-white hover:text-gray-900 border-4 border-transparent hover:border-l-[#334155] hover:text-[#0EA5E9] cursor-pointer";

const sideBarContainer = "lg:w-[20%] rounded-t-2xl h-[100vh] fixed lg:rounded-r-2xl lg:rounded-t-none flex flex-col justify-between gap-15 py-5 lg:pr-3 bg-[#0A0F1C] text-[#CBD5E1]"
const sideBarMinimized = "lg:w-[7%] rounded-t-2xl h-[100vh] fixed lg:rounded-r-2xl lg:rounded-t-none flex flex-col justify-between gap-15 py-5 pt-25 lg:pr-3 bg-[#0A0F1C] text-[#CBD5E1]"

const NavItems = [
  {
    path: "/",
    icon: <MdHome />,
    name: "OverView",
  },
  {
    path: "/transaction",
    icon: <GrTransaction />,
    name: "Transaction",
  },
  {
    path: "/budget",
    icon: <IoPieChart />,
    name: "Budget",
  },
  {
    path: "/pots",
    icon: <MdOutlineBatteryChargingFull />,
    name: "Pots",
  },
  {
    path: "/recurring-bills",
    icon: <LiaMoneyBillSolid />,
    name: "Recurring Bills",
  },
];

const Sidebar = () => {
  const [minimize, setMinimize] = useState(true);
  const location = useLocation();

  const handleMinimize = () => {
    if (minimize) {
      setMinimize(false);
    } else {
      setMinimize(true)
    }
  };
  return (
    <>
      <div
        className={ minimize ? `${sideBarContainer}` : `${sideBarMinimized}`}
      >
        <div className="flex flex-col gap-10">
          <h2 className={minimize ? `text-2xl font-bold pl-7 hidden lg:block` : `hidden`}>finance</h2>
          <div className="flex justify-between px-5 lg:px-0 lg:flex-col gap-2">
            {NavItems.map((items, idx) => (
              <Link
                key={idx}
                to={items.path}
                className={`${linkStyling} ${location.pathname === items.path ? "lg:pl-6 py-1 gap-2 rounded-r-md text-gray-900 text-3xl border-l-[#334155] lg:text-[14px] bg-white" : ""}`}
              >
                <p className={minimize ? "" : "text-xl"}>{items.icon}</p>
                <p className={minimize ? "" : "hidden"}>{items.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`${linkStyling} hidden lg:flex`}
          onClick={handleMinimize}
        >
          <PiArrowFatLineLeftFill className={minimize ? "block" : "hidden"} />
          <PiArrowFatLineRightFill className={minimize ? "hidden" : "block"} />
          <p className={minimize ? "" : "hidden"}>Minimize Menu</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

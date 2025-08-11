import { Link } from "react-router-dom";
import { MdHome, MdOutlineBatteryChargingFull } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoPieChart } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { PiArrowFatLineLeftFill } from "react-icons/pi";
import { useState } from "react";

const linkStyling =
  "flex items-center lg:pl-6 py-1 gap-2 rounded-r-md text-3xl lg:text-[14px] hover:bg-white hover:text-gray-900 hover:border-4 hover:border-transparent hover:border-l-[#334155] hover:text-[#0EA5E9] focus:bg-white focus:text-gray-900 focus:border-4 focus:border-transparent focus:border-l-[#334155] focus:text-[#0EA5E9] focus:pl-5 cursor-pointer";


const mobile = "hidden lg:block"


const navItems= [
  {
    name:"Home",
    path: "/"
  },
  {
    name:"transcation",
    path: "/transaction"
  }
]

const Sidebar = () => {
  const [minimize, setMinimize] = useState(true)

  const handleMinimize = () => {
    setMinimize(false)
  }
  // const pathname = useHistory()

  // const isActive= pathname === path
  return (
    <>
      <div className={minimize ? `lg:w-[20%] rounded-t-2xl h-[100vh] fixed lg:rounded-r-2xl lg:rounded-t-none flex flex-col justify-between gap-15 py-5 lg:pr-3 bg-[#0A0F1C] text-[#CBD5E1]` : "w-[30px] fixed bg-[#0A0F1C] text-[#CBD5E1]"}>
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-bold pl-7 hidden lg:block">finance</h2>
          <div className="flex justify-between px-5 lg:px-0 lg:flex-col gap-2">
            <Link to="/" className={/*`${isActive ? "text-red-500" : "text-green-600"}`*/linkStyling}>
              <MdHome />
              <p className={mobile}>Overview</p>
            </Link>
            <Link to="/transaction" className={linkStyling}>
              <GrTransaction />
              <p className={mobile}>Transaction</p>
            </Link>
            <Link to="/" className={linkStyling}>
              <IoPieChart />
              <p className={mobile}>Budgets</p>
            </Link>
            <Link to="/" className={linkStyling}>
              <MdOutlineBatteryChargingFull />
              <p className={mobile}>Pots</p>
            </Link>
            <Link to="/" className={linkStyling}>
              <LiaMoneyBillSolid />
              <p className={mobile}>Recovery bills</p>
            </Link>
          </div>
        </div>

        <div className={`${linkStyling} hidden lg:flex`} onClick={handleMinimize}>
          <PiArrowFatLineLeftFill />
          <p>Minimize Menu</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

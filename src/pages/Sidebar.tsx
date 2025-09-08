import { Link, useLocation, useNavigate,  } from "react-router-dom";
import {
  PiArrowFatLineLeftFill,
  PiArrowFatLineRightFill,
} from "react-icons/pi";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { TbLogout2 } from "react-icons/tb";

const iconStyling = "w-full max-w-[50px] lg:w-[14px]"

const linkStyling =
  "flex gap-4 items-center lg:pl-6 py-1 px-3 lg:px-0 lg:rounded-r-md text-3xl lg:text-[12px] font-bold lg:h-10 hover:bg-white hover:text-gray-900 border-4 border-transparent hover:border-l-[rgba(39,124,120,1)] hover:text-[#0EA5E9] cursor-pointer";

const baseSidebarClasses ="w-full rounded-t-2xl fixed bottom-0 lg:static z-2 lg:rounded-r-2xl lg:rounded-t-none flex flex-col justify-between gap-15 py-5 lg:pr-3 bg-[rgba(32,31,36,1)] text-[#CBD5E1]";
const expandedSidebar = "lg:max-w-[200px]";
const minimizedSidebar = "lg:max-w-[100px] pt-25";

const NavItems = [
  {
    path: "/",
    icon: <img src="images/home.png" alt="" className={iconStyling}/>,
    name: "Overview",
  },
  {
    path: "/transaction",
    icon: <img src="images/transaction-icon.svg" alt="" className={iconStyling}/>,
    name: "Transactions",
  },
  {
    path: "/budget",
    icon: <img src="images/budget-icon.svg" alt="" className={iconStyling}/>,
    name: "Budgets",
  },
  {
    path: "/pots",
    icon: <img src="images/sidebar-pot-icon.png" alt="" className={iconStyling}/>,
    name: "Pots",
  },
];

interface SidebarProps {
  setUser: Dispatch<SetStateAction<string | null>>
}

const Sidebar = ({ setUser } : SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate()

  // event for minimizing the sidebar
  const handleMinimize = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  // event for logging out user
  const handleLogout = () => {
    localStorage.removeItem("username")
    setUser(null)
    navigate("/login")
  }

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) {
      setCollapsed(saved === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed.toString());
  }, [collapsed]);

  return (
    <>
      <div className={`${baseSidebarClasses} ${collapsed ? expandedSidebar : minimizedSidebar}`}>
        <div className="flex flex-col gap-10">
          <h2
            className={
              collapsed ? `text-2xl font-bold pl-7 hidden lg:block` : `hidden`
            }
          >
            FinPlan
          </h2>
          <div className="flex justify-between lg:h-[82vh] px-5 lg:px-0 lg:flex-col">
            {/* each link styling */}
            <div className="flex lg:flex-col gap-2 justify-between w-full">
              {NavItems.map((items, idx) => (
                <Link
                  key={idx}
                  to={items.path}
                  className={`${linkStyling} ${
                    location.pathname === items.path
                      ? "lg:pl-6 py-1 gap-2 rounded-t-md lg:rounded-t-none bg-white lg:rounded-r-md text-gray-900 text-3xl lg:border-l-[rgba(39,124,120,1)] lg:text-[14px]"
                      : ""
                  }`}
                >
                  <p className={`${collapsed ? "" : "text-xl"} w-5 lg:w-4`}>{items.icon}</p>
                  <p className={`${collapsed ? "lg:block" : "hidden"} hidden`}>{items.name}</p>
                </Link>
              ))}
            </div>

            <div>
              <div
                onClick={handleLogout}
                className={`${linkStyling} !pl-5`}
              >
                <TbLogout2  className="text-[20px]" />
                <p className={`hidden ${collapsed ? "" : "lg:hidden"} lg:block`}>Leave</p>
              </div>
              <div
                className={`${linkStyling} hidden lg:flex`}
                onClick={handleMinimize}
              >
                <PiArrowFatLineLeftFill
                  className={collapsed ? "block" : "hidden"}
                />
                <PiArrowFatLineRightFill
                  className={collapsed ? "hidden" : "block"}
                />
                <p className={collapsed ? "" : "hidden"}>Minimize Menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

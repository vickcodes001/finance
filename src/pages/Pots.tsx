import PotsCard from "../components/PotsCard";
import type { details } from "../components/type";
import Sidebar from "./Sidebar";

const detailsData: details[] = [
  {
    potTitle: "Main Savings Pot",
    potDescription: "Manage your savings",
    potIcon: "💰",
  },
  {
    potTitle: "Gifting Pot",
    potDescription: "Track gift funds",
    potIcon: "🎁",
  },
  {
    potTitle: "Event Pot",
    potDescription: "Concerts & fun",
    potIcon: "🎫",
  },
  {
    potTitle: "Gadget Pot",
    potDescription: "For your next device",
    potIcon: "💻",
  },
];

const Pots = () => {
  return (
    <>
      <div className="flex">
          <Sidebar />
          <div className="lg:w-[25%] rounded-t-2xl h-[100vh]"></div>
          <div className="min-h-screen bg-gray-100 p-6 lg:p-10">
            <h2 className="text-2xl font-bold mb-6">Your Pots</h2>
            <PotsCard detail={detailsData} />
          </div>
      </div>
    </>
  );
};

export default Pots;

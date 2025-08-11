import { Link } from "react-router-dom";
import Card from "./Cards";

const cards = [
  {
    title: "Current Balance",
    amount: "$****",
  },
  {
    title: "Income",
    amount: "$****",
  },
  {
    title: "Expenses",
    amount: "$****",
  },
];

const Overview = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex justify-between items-center max-w-full">
        <h2 className="text-2xl font-bold">Overview</h2>
        <div className="flex gap-2">
          <Link to="/login">
            <button className="py-1 px-2 rounded-sm border border-[#1E293B] text-[10px] text-[#1E293B] cursor-pointer">Login</button>
          </Link>
          <Link to="/signUp">
            <button className="py-1 px-2 rounded-br-xl text-[10px] text-white bg-[#1E293B] cursor-pointer">Join Us</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-row gap-5">
        {cards.map((card, index) => (
          <Card key={index} size="sm" layout="screen" responsiveness="sm">
            <p>{card.title}</p>
            <p className="text-3xl font-bold">{card.amount}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Overview;

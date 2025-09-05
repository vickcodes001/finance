import { Link } from "react-router-dom";

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

interface OverviewProps {
  user: string | null;
}


const Overview = ({ user } : OverviewProps) => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex justify-between items-center w-full max-w-[1000px]">
        <h2 className="text-2xl font-bold">Overview</h2>
        {
          user 
          ? 
          <p>Welcome {user}</p> 
          :
          <div className="flex gap-2">
            <Link to="/login">
              <button className="py-1 px-2 rounded-sm border border-[#1E293B] text-[10px] text-[#1E293B] cursor-pointer">Login</button>
            </Link>
            <Link to="/signUp">
              <button className="py-1 px-2 rounded-br-xl text-[10px] text-white bg-[rgba(32,31,36,1)] cursor-pointer">Join Us</button>
            </Link>
          </div>
        }
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-full max-w-[1000px]">
        {cards.map((card, index) => (
          <div key={index} className={`flex flex-col gap-3 xl:text-size-sm md:text-size-xs w-full lg:max-w-[400px] h-25 p-5 rounded-xl ${index === 0 ? "bg-[rgba(32,31,36,1)] text-white" : "bg-white"}`}>
              <p className="text-[12px]">{card.title}</p>
              <p className="text-2xl font-bold">{card.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;

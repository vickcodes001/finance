import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const cards = [
  {
    title: "Current Balance",
    amount: "N*6***",
  },
  // {
  //   title: "Income",
  //   amount: "$****",
  // },
  // {
  //   title: "Expenses",
  //   amount: "$****",
  // },
];

interface UserData {
  balance: string;
  name: string;
  currency: string;
}


const Overview = () => {
  const [userData, setUserData] = useState<UserData | null>(null)
  const { user } = useUser()

  const handleConnect = async () => {
  try {
    const res = await axios.post("https://finance-poc.onrender.com/connect-account-test", {
      userId: 123,
    });

    const redirectUrl = res.data.data.mono_url;
    // const user = res.data.data;

    // localStorage.setItem("pendingConnection", JSON.stringify(user));

    window.location.href = redirectUrl;
  } catch (err) {
    console.error("Error in first step:", err);
  }
};

//When page loads again, run second request
useEffect(() => {
  const pending = localStorage.getItem("pendingConnection");
  if (pending) {
    (async () => {
      try {
        const accountGotten = await axios.get("https://finance-poc.onrender.com/accounts");
        console.log("account:", accountGotten.data.data[0]);
        setUserData(accountGotten.data.data[0]);

        localStorage.removeItem("pendingConnection");
      } catch (error) {
        console.error("Error fetching account:", error);
      }
    })();
  }
}, []);

  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex justify-between items-center w-full max-w-[1000px]">
        <h2 className="text-2xl font-bold">Overview</h2>
        {
          user 
          ? 
          <div className="flex items-center gap-2">
            <p className="font-bold">Welcome {user.username}</p> 
            { userData ? <div></div> :
              <button onClick={handleConnect} className="p-2 bg-[#201F24] rounded-sm text-white text-[12px] cursor-pointer">connect wallet</button>
            }
          </div>
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
              {
                userData ? <p className="text-2xl font-bold"> N{userData.balance}</p> : <p className="text-2xl font-bold">{card.amount}</p>
              }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;

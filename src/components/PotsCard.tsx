import { Link } from "react-router-dom";
import type { details } from "./type";
import Card from "./Cards";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

export type pot = {title: string, amount: number}

interface Props {
  detail: details[];
}



const PotsCard = ({ detail }: Props) => {
  const [potsGotten, setPotsGotten] = useState<pot[]>([])
  const potDetails = detail.filter((d) => d.potTitle && d.potDescription && d.potIcon);
  const { accountBalance } = useUser()
  console.log("account balance", accountBalance);
  
  const totalAmount = potsGotten.reduce((sum, item) => sum + item.amount, 0);
  
  useEffect(() => {
  const saved = localStorage.getItem("potsCard");
  if (saved) {
    setPotsGotten(JSON.parse(saved));
  }
}, []);

  

  return (
    <>
      <Card size="lg" layout="screen">
        {potDetails.map((pot, index) => (
          <div className="flex justify-between" key={index}>
            <h3 className="font-bold text-xl">{pot.potTitle}</h3>
            <Link to="/pots" className="flex items-center gap-2 text-gray-500">
              <p className="text-[12px]">{pot.potDescription}</p>
              <p>{pot.potIcon}</p>
            </Link>
          </div>
        ))}

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex gap-5 bg-[#F8F4F0] p-5 rounded-md items-center lg:w-1/2">
            <img src="images/card-pot-icon.svg" alt="" />
            <div>
              <p className="text-[12px] text-gray-500">Total Saved</p>
              <p className="text-2xl font-bold">N{Number(totalAmount).toLocaleString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:w-1/2">
            {potsGotten.map((pot, index) => (
              <div
                key={index}
                className={`px-3 rounded-l-[4px] ${
                  pot.title === "Savings"
                    ? "border-3 border-transparent border-l-green-700"
                    : pot.title === "Gift"
                    ? "border-3 border-transparent border-l-green-300"
                    : pot.title === "Concert Ticket"
                    ? "border-3 border-transparent border-l-[#22D3EE]"
                    : "border-3 border-transparent border-l-amber-300"
                }`}
              >
                <p className="text-[10px] text-gray-500">{pot.title}</p>
                <p className="font-semibold text-[14px]">N{Number(pot.amount).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default PotsCard;

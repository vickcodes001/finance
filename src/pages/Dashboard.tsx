import Overview from "../components/Overview";
import PotsCard from "../components/PotsCard";
import Sidebar from "./Sidebar";
import TransactionCard from "../components/TransactionCard";
import BudgetsCard from "../components/BudgetsCard";
import RecurringBills from "../components/RecurringBills";
import type { details } from "../components/type";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  detail: details[];
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>
}

const Dashboard = ({ detail, user, setUser }: Props) => {
  return (
    <div className="flex flex-col-reverse lg:w-[1224px] mx-auto lg:flex-row relative bg-[#F8F4F0]">
      <Sidebar setUser={setUser}/>

      <div className="flex flex-col gap-5 py-5 px-5 lg:px-10 lg:w-full lg:max-w-[100%]">
        <Overview user={user} />
        <div className="flex flex-col lg:flex-row lg:w-full lg:max-w-[1000px] gap-5">
          <div className="flex flex-col lg:w-[60%] gap-5">
            <PotsCard detail={detail} />
            <TransactionCard detail={detail} />
          </div>

          <div className="flex flex-col gap-5 lg:w-full lg:max-w-[400px]">
            <BudgetsCard detail={detail} />
            <RecurringBills detail={detail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

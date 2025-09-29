import Overview from "../components/Overview";
import PotsCard from "../components/PotsCard";
// import TransactionCard from "../components/TransactionCard";
import BudgetsCard from "../components/BudgetsCard";
import type { details } from "../components/type";

interface Props {
  detail: details[];
}

const Dashboard = ({ detail }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-5 py-5 px-5 lg:px-10 lg:w-full lg:max-w-[100%]">
        <Overview />
        <div className="flex flex-col lg:flex-row lg:w-full lg:max-w-[1000px] gap-5">
          <div className="flex flex-col lg:w-[60%] gap-5">
            <PotsCard detail={detail} />
            {/* <TransactionCard detail={detail} /> */}
          </div>

          <div className="flex flex-col gap-5 lg:w-full lg:max-w-[400px] pb-30">
            <BudgetsCard detail={detail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

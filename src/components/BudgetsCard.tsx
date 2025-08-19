import { Link } from "react-router-dom";
import type { details } from "./type";
import Card from "./Cards";
import Chart from "./Chart";

interface Props {
  detail: details[];
}

const Budgets = [
  {
    title: "Entertainment",
    amount: 50.0,
  },
  {
    title: "Bills",
    amount: 750.0,
  },
  {
    title: "Dinning Out",
    amount: 75.0,
  },
  {
    title: "Personal Care",
    amount: 100.0,
  },
];

// calculating the amount of the chart to affect the chart
// const chart = Budgets.reduce((sum, item) => sum + item.amount, 0 )

const BudgetsCard = ({ detail }: Props) => {
  const budgetsDetail = detail.filter(
    (d) => d.budgetTitle && d.budgetDescription && d.budgetIcon
  );

  return (
    <>
      <Card size="md" layout="screen">
        <div>
          {budgetsDetail.map((budget, index) => (
            <div key={index}>
              <div className="flex justify-between" key={index}>
                <h3 className="font-bold text-xl">{budget.budgetTitle}</h3>
                <Link
                  to="/budgets"
                  className="flex items-center justify-end gap-2 text-gray-500"
                >
                  <p className="text-[12px]">{budget.budgetDescription}</p>
                  <p className="w-3">{budget.budgetIcon}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-2 justify-between lg:justify-start items-center lg:items-start">
          {/* chart import */}
          <Chart 
             entertainment={100} 
             bill={150} 
             dinning={-20} 
             max={200} 
          />

          {/* budget mapping */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-1 w-full lg:w-0">
            {Budgets.map((budget, index) => (
              <div
                key={index}
                className={`px-3 rounded-l-[4px] ${
                  budget.title === "Entertainment"
                    ? "border-3 border-transparent border-l-green-700"
                    : budget.title === "Bills"
                    ? "border-3 border-transparent border-l-green-300"
                    : budget.title === "Dinning Out"
                    ? "border-3 border-transparent border-l-[#22D3EE]"
                    : "border-3 border-transparent border-l-amber-300"
                }`}
              >
                <p className="text-[10px] text-gray-500">{budget.title}</p>
                <p className="font-semibold text-[14px]">{budget.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default BudgetsCard;

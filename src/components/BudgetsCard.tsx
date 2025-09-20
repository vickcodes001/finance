import { Link } from "react-router-dom";
import type { details } from "./type";
import Card from "./Cards";
import Chart from "./Chart";
import { useState } from "react";

interface Props {
  detail: details[];
}

export type budgetType = {title: string, amount: number}

const BudgetsCard = ({ detail }: Props) => {
    const [budget, setBudget] = useState<budgetType[]>(() => {
    const saved = localStorage.getItem("budgetsCard");
    return saved ? JSON.parse(saved) : [];
    setBudget(budget)
  });
  const budgetsDetail = (detail || []).filter(
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
                  to="/budget"
                  className="flex items-center justify-end gap-2 text-gray-500"
                >
                  <p className="text-[12px]">{budget.budgetDescription}</p>
                  <p className="w-3">{budget.budgetIcon}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-between lg:justify-start items-center lg:items-start">
          {/* chart import */}
          <Chart />

          {/* budget mapping */}
          <div className="grid grid-cols-2 md:flex md:flex-col md:w-[100px]  lg:flex-col gap-1 w-full lg:w-0">
            {budget.map((bud: budgetType, index: number) => (
              <div
                key={index}
                className={`px-3 rounded-l-[4px] ${
                  bud.title === "Entertainment"
                    ? "border-3 border-transparent border-l-green-700"
                    : bud.title === "Bills"
                    ? "border-3 border-transparent border-l-green-300"
                    : bud.title === "Dinning Out"
                    ? "border-3 border-transparent border-l-[#22D3EE]"
                    : "border-3 border-transparent border-l-amber-300"
                }`}
              >
                <p className="text-[10px] text-gray-500">{bud.title}</p>
                <p className="font-semibold text-[14px]">{bud.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default BudgetsCard;

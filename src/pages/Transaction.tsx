import Woman from "../../public/images/woman.jpg";
import Man from "../../public/images/man.jpg";
import Chinese from "../../public/images/chinese.jpg";
import Sidebar from "./Sidebar";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

const imageStyling = "object-cover w-7 h-7 rounded-full";

const transactionsData = [
  {
    image: (
      <img src={Woman} alt="a smiling profile woman" className={imageStyling} />
    ),
    name: "Emma Richardson",
    amount: "+$75.50",
    date: "19 Aug 2024",
  },
  {
    image: (
      <img
        src={Chinese}
        alt="a smiling profile chinese man"
        className={imageStyling}
      />
    ),
    name: "Savory Bites Bistro",
    amount: "-55.50",
    date: "19 Aug 2024",
  },
  {
    image: (
      <img src={Man} alt="a smiling profile man" className={imageStyling} />
    ),
    name: "Daniel Carter",
    amount: "-$42.30",
    date: "18 Aug 2024",
  },
  {
    image: (
      <img
        src={Chinese}
        alt="a smiling profile chinese man"
        className={imageStyling}
      />
    ),
    name: "Sun park",
    amount: "+$120.00",
    date: "17 Aug 2024",
  },
  {
    image: (
      <img src={Woman} alt="a smiling profile woman" className={imageStyling} />
    ),
    name: "Urban Services Hub",
    amount: "+$65.00",
    date: "17 Aug 2024",
  },
];

const Transactions = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row min-w-full">
        <div className="lg:w-[25%] rounded-t-2xl h-[100vh]"></div>
        <Sidebar />
        <div className="p-10 min-w-[80%]">

          {/* heading */}
          <div className="flex justify-between mb-10">
            <h2 className="text-2xl font-bold">Transactions</h2>

            <div className="flex gap-5">
              <div className="flex relative text-gray-600">
                <input
                  className="border outline-none rounded-sm p-2 pr-9 w-50 border-gray-400 bg-gray-200"
                  type="text" 
                  placeholder="Search..."
                />
                <CiSearch className="absolute right-2 top-2 text-2xl"/>
              </div>
              <div className="flex items-center gap-2 border border-gray-400 bg-gray-200 px-3 py-2 rounded">
                <IoFilter />
                <p>Filter</p>
              </div>
            <button className="py-1 px-2 rounded-br-xl text-[10px] text-white bg-[#1E293B] cursor-pointer">Upload Receipt</button>
            </div>
          </div>

          {/* table body */}
          <div>
            <table className="w-full border-collapse  border-slate-400">
              <thead>
                <tr className="flex justify-between border border-transparent border-b-gray-200 py-4">
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactionsData.map((data, index) => (
                  <tr
                    key={index}
                    className="flex justify-between border border-transparent border-b-gray-200 py-4 "
                  >
                    <td className="flex items-center gap-3 w-1/3">
                      <p>{data.image}</p>
                      <p className="text-[12px] font-semibold">{data.name}</p>
                    </td>
                    <td className="text-[12px] font-semibold text-center w-1/3">
                      <p>{data.amount}</p>
                    </td>
                    <td className="text-[10px] text-gray-400 w-1/3 text-end">
                      <p>{data.date}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;

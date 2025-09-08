import Woman from "../../public/images/woman.jpg";
import Man from "../../public/images/man.jpg";
import Chinese from "../../public/images/chinese.jpg";
import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";

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
      <div>
        <div className="flex flex-col gap-10 p-5 px-5 lg:px-10 min-w-[80%]">
          <h2 className="text-2xl font-bold">Transactions</h2>

          {/* heading */}

          <div className="bg-white p-7 rounded-xl">
            <div className="flex justify-between gap-5">
              <div className="flex text-[12px] relative text-gray-600">
                <input
                  className="border outline-none rounded-sm p-2 pr-9 w-full max-w-[400px] border-gray-400"
                  type="text"
                  placeholder="Search transaction"
                />
                <CiSearch className="absolute right-2 top-2 text-[12px]" />
              </div>
              <div className="hidden lg:flex gap-3 text-[12px]">
                <div className="flex items-center gap-2">
                  <p className="text-gray-600">Sort by</p>
                  <div className="flex items-center justify-center border border-gray-400 w-20 p-2 rounded-md gap-2">
                    <p>Latest</p>
                    <MdArrowDropDown />
                    <MdArrowDropUp className="hidden" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-gray-600">Category</p>
                  <div className="flex items-center justify-center border border-gray-400 w-33 p-2 rounded-md gap-2">
                    <p>All Transactions</p>
                    <MdArrowDropDown />
                    <MdArrowDropUp className="hidden" />
                  </div>
                </div>
              </div>
            </div>
            {/* table body */}
            <div>
              <table className="w-full border-collapse  border-slate-400">
                <thead className="hidden lg:flex">
                  <tr className="flex justify-between border border-transparent border-b-gray-200 py-4">
                    <th>Recipient / Sender</th>
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
                      <td className="flex items-center gap-3">
                        <p>{data.image}</p>
                        <p className="text-[12px] font-semibold">{data.name}</p>
                      </td>
                      <td className="flex flex-col text-[12px] font-semibold text-center w-">
                        <p>{data.amount}</p>
                        <p className="text-[10px] text-gray-400">{data.date}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* footer */}
            <div className="flex justify-between pt-5">
                <div className="flex items-center gap-1 p-1 w-full max-w-[60px] text-[11px] text-gray-900 border border-gray-400 rounded-md">
                  <IoMdArrowDropleft />
                  <p>Prev</p>
                </div>
                <div className="flex items-center gap-1 p-1 w-full max-w-[60px] text-[11px] text-gray-900 border border-gray-300 rounded-md">
                  <IoMdArrowDropleft />
                  <p>Next</p>
                </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;

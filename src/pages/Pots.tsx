import { useEffect, useState } from "react";
import { NewPot } from "../components/NewPot";
import { MdDelete } from "react-icons/md";

export type Pot = { title: string; amount: number };
const balance = localStorage.getItem("accountBalance");
const newBalance: number = balance ? Number(balance) : 0;

const Pots = () => {
  const [potsCard, setPotsCard] = useState<Pot[]>(() => {
    const saved = localStorage.getItem("potsCard");
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("potsCard", JSON.stringify(potsCard));
  }, [potsCard]);

  const handleNewPotModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (index: number) => {
    setPotsCard(potsCard.filter((_, i) => i !== index));
  };

  const total = potsCard.reduce((sum, pot: Pot) => sum + pot.amount, 0);
  const newConcept = newBalance - total;

  return (
    <>
      <div>
        {/* heading */}
        <div className="flex flex-col gap-10 p-5 w-full h-[100vh]">
          {isOpen && (
            <div className="absolute h-[100%] inset-0 bg-black/40 backdrop-blur-sm z-1"></div>
          )}{" "}
          {/* background blur effect */}
          <div className="flex justify-between items-center relative w-full">
            <h2 className="text-2xl font-bold">Pots</h2>
            <button
              onClick={handleNewPotModal}
              className="p-2 bg-[#201F24] rounded-sm text-white text-[12px] cursor-pointer"
            >
              + Add New Pot
            </button>
            {isOpen && (
              <div className="absolute z-2 top-50 left-8 lg:top-100 lg:left-100 bottom-0">
                <NewPot
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  onSubmit={(newPot) => setPotsCard([...potsCard, newPot])}
                />
              </div>
            )}
          </div>
          <div className="font-semibold pr-10">
            <p>
              Pots is for short plannings. Think of it like a to-do but with
              your money. No much stress, add a new pot that you want to use
              your money to instantaneously do and delete when done.
            </p>
          </div>
          {/* main */}
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex gap-2">
                <p className="font-bold">Available Balance:</p>
                <p className="font-semibold">
                  N{Number(balance).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Budgeted Balance:</p>
                <p className="font-semibold">
                  N{Number(newConcept).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-110 lg:h-165 pt-5 pb-5 overflow-y-scroll">
              {potsCard.map((pot, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-between bg-white w-full max-w-[1060px] h-50 p-5 rounded-xl relative"
                  >
                    <h2 className="text-xl font-semibold">{pot.title}</h2>
                    <p className="text-xl font-semibold">
                      {Number(pot.amount).toLocaleString()}
                    </p>
                    <MdDelete
                      className="absolute right-5 cursor-pointer"
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pots;

import { useState } from "react";
import { NewPot } from "../components/NewPot";

export type Pot = {title: string}

const Pots = () => {
  const [potsCard, setPotsCard] = useState<Pot[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleNewPotModal = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div>
          {/* heading */}
          <div className="flex flex-col gap-10 p-5 w-full h-[100vh]">
            {isOpen && <div className="absolute h-[100%] inset-0 bg-black/40 backdrop-blur-sm z-1"></div>} {/* background blur effect */}
              <div className="flex justify-between items-center relative w-full">
                  <h2 className="text-2xl font-bold">Pots</h2>
                  <button 
                    onClick={handleNewPotModal}
                    className="p-2 bg-[#201F24] rounded-sm text-white text-[12px] cursor-pointer"> 
                      + Add New Pot
                  </button>
                  {isOpen && <div className="absolute z-2 top-100 left-100 bottom-0"><NewPot  isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={(newPot) => setPotsCard([...potsCard, newPot])} /></div>}
              </div>

              <div className="font-semibold pr-10">
                <p>Pots is for short plannings, think of it like a to-do but with your money. No much stress, add a new pot that you want to use your money to instantaneously do and delete when done.</p>
              </div>

              {/* main */}
              <div>
                <div className="grid grid-cols-2 gap-4 h-100">
                    {potsCard.map((pot, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col justify-between bg-white w-full max-w-[1060px] h-50 p-5 rounded-xl"
                        >
                          <h2 className="text-xl font-semibold">{pot.title}</h2>
                          <div>
                            <div>
                              <p>Total Saved</p>

                            </div>
                          </div>
                          <footer>
                            
                          </footer>
                        </div>
                      )
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

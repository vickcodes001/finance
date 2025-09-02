import { useState } from "react"
import Sidebar from "./Sidebar"
import { NewBudget } from "../components/NewBudget"


const Budget = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleBudgetModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row w-[1224px] mx-auto bg-[#F8F4F0]">
                <Sidebar />
                <div className="flex flex-col gap-10 p-5 w-full">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-2xl font-bold">Budgets</h2>
                        <button onClick={handleBudgetModal} className="p-2 bg-[#201F24] rounded-sm cursor-pointer text-white text-[12px]"> + Add New Budget</button>
                        {isOpen && <div><NewBudget isOpen={isOpen} setIsOpen={setIsOpen}/></div>}
                    </div>

                    <div className="flex justify-between">
                        <div className="h-120 bg-white w-full max-w-[400px] rounded-xl"></div>
                        {/* side column */}
                        <div className="flex flex-col w-full max-w-[560px] gap-5">
                            <div className="h-100 w-full bg-white rounded-xl"></div>
                            <div className="h-100 w-full bg-white rounded-xl"></div>
                            <div className="h-100 w-full bg-white rounded-xl"></div>
                            <div className="h-100 w-full bg-white rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Budget
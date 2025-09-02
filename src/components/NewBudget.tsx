import { useEffect } from "react"

export const NewBudget = (
    {
        isOpen, 
        setIsOpen, 
        } : 
    { 
        isOpen: boolean, 
        setIsOpen: (open: boolean) => void, 
        // setPotsCard: (open: boolean) => void 
    } 
) => {

    useEffect(() => {
        const handleClose = () => {
        setIsOpen(!isOpen)
    }

    document.addEventListener("click", handleClose, true)
    }, [])

    const handleClose = () => {
        setIsOpen(!isOpen)
        // console.log("I was clicked");
        
    }

    const handleSubmit = () => {

        setIsOpen(!isOpen)
    }

    return (
        <>
            {isOpen && 
            <div className="flex flex-col p-5 gap-2 rounded-xl bg-white">

            <div className="flex justify-end w-full">
                <p onClick={handleClose} className="cursor-pointer">x</p>
            </div>
            <label htmlFor="title">Please put in your budget title</label>
            <input 
                type="text" 
                placeholder="title" 
                className="bg-white p-2 rounded outline-none border border-gray-900"
            />
            <button onClick={handleSubmit} className="p-2 bg-[#201F24] rounded-sm text-white text-[12px] cursor-pointer">done</button>
            </div>
            }
        </>
    )
}
import { useState } from "react";
import type { Pot } from "../pages/Pots";

export const NewPot = ({
  isOpen,
  setIsOpen,
  onSubmit,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onSubmit: (pot: Pot) => void;
}) => {
  const [title, setTitle] = useState("");

  const handleClose = () => setIsOpen(false);

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit({ title });
      setTitle("");
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="flex flex-col p-5 gap-2 rounded-xl bg-white shadow-lg w-72">
      <div className="flex justify-end">
        <p onClick={handleClose} className="cursor-pointer">
          x
        </p>
      </div>
      <label htmlFor="title">Please put in your pot title</label>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-white p-2 rounded border border-gray-900 outline-none"
      />
      <button
        onClick={handleSubmit}
        className="p-2 bg-[#201F24] rounded-sm text-white text-[12px] cursor-pointer"
      >
        done
      </button>
    </div>
  );
};

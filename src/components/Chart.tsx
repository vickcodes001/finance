import { useState } from "react";

const radius = 70;
const circumference = 2 * Math.PI * radius;

type CircularProgressProps = {
  entertainment: number;
  bill: number;
  dinning: number;
  max: number;
};

const Chart = ({ entertainment, bill, dinning, max }: CircularProgressProps) => {
  const entertainmentPercent = (entertainment / max) * 100;
  const billPercent = (bill / max) * 100;
  const dinningPercent = (dinning / max) * 100;

  const entertainmentOffset =
    circumference - (entertainmentPercent / 100) * circumference;
  const billOffset = circumference - (billPercent / 100) * circumference;
  const dinningOffset = circumference - (dinningPercent / 100) * circumference;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center h-52 w-50 relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="" viewBox="0 0 208 208">
        {/* Base circle */}
        <circle
          cx={104}
          cy={104}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="25"
          fill="none"
          className="w-100 border"
        />

        {/* dinning (Red) */}
        <circle
          cx={104}
          cy={104}
          r={radius}
          stroke="#ef4444"
          strokeWidth="25"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={isHovered ? dinningOffset : circumference}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />

        {/* bill (Blue) */}
        <circle
          cx={104}
          cy={104}
          r={radius}
          stroke="#3b82f6"
          strokeWidth="25"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={isHovered ? billOffset : circumference}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />

        {/* entertainment (Green) */}
        <circle
          cx={104}
          cy={104}
          r={radius}
          stroke="#10b981"
          strokeWidth="25"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={isHovered ? entertainmentOffset : circumference}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold">
          ${(entertainment + bill + dinning).toFixed(2)}
        </h2>
        <p className="text-[10px]">of ${max.toFixed(2)} limit</p>
      </div>
    </div>
  );
};

export default Chart;

import { ChangeEvent } from "react";

interface InputRangeProps {
  gridSize: number;
  min: number;
  max: number;
  updateGridSize: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputRange({
  gridSize,
  min,
  max,
  updateGridSize,
}: InputRangeProps) {
  return (
    <div className="mb-5">
      <label className="mb-0 block text-base font-medium text-white">
        Grid size: {gridSize}
      </label>
      <input
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#553986e0] hover:bg-[#553986]"
        type="range"
        min={min}
        max={max}
        onChange={updateGridSize}
        value={gridSize > 20 ? 20 : gridSize}
      />
    </div>
  );
}

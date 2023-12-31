import { ChangeEvent } from "react";
import { useGridContext } from "../hooks/useGridContext";

interface InputRangeProps {
  min: number;
  max: number;
  updateGridSize: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputRange({
  min,
  max,
  updateGridSize,
}: InputRangeProps) {
  const { gridSize } = useGridContext();

  return (
    <div className="mb-5">
      <label className="mb-0 block appearance-none overflow-hidden p-0 text-base font-medium text-white">
        Grid size: {gridSize}
      </label>
      <input
        // className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#553986e0] hover:bg-[#553986]"
        className="slider-thumb h-2 w-full cursor-pointer appearance-none bg-[#553986e0]"
        type="range"
        min={min}
        max={max}
        onChange={updateGridSize}
        value={gridSize > 20 ? 20 : gridSize}
      />
    </div>
  );
}

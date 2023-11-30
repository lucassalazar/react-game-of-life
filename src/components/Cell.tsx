import { memo, Dispatch, SetStateAction, ReactNode } from "react";
import { GridType } from "./Grid";

interface CellProps {
  rowIndex: number;
  cellIndex: number;
  gridSize: number;
  setGrid: Dispatch<SetStateAction<GridType>>;
  gridWidth: number;
  children: ReactNode;
}

const Cell = memo(function Cell({
  rowIndex,
  cellIndex,
  gridSize,
  setGrid,
  gridWidth,
  children,
}: CellProps) {
  console.log(`Cell: (${rowIndex}, ${cellIndex})`);

  const cellSize = gridWidth / gridSize;

  return (
    <td
      style={{
        width: `${cellSize}px`,
        height: `${cellSize}px`,
      }}
      className={
        `cursor-pointer transition-all duration-300 ease-out ` +
        (children
          ? "bg-gray-300 hover:bg-gray-500"
          : "bg-neutral-700 hover:bg-gray-500")
      }
      onClick={() =>
        setGrid((prev: GridType) => {
          const newArr = [...prev];
          newArr[rowIndex] = [...prev[rowIndex]];
          newArr[rowIndex][cellIndex] = children ? 0 : 1;
          return newArr;
        })
      }
      id={`${rowIndex}-${cellIndex}`}
    ></td>
  );
});

export default Cell;

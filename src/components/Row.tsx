import { Dispatch, SetStateAction } from "react";
import { BinaryValue, GridType } from "./Grid";
import Cell from "./Cell";

interface RowProps {
  row: BinaryValue[];
  rowIndex: number;
  gridSize: number;
  setGrid: Dispatch<SetStateAction<GridType>>;
  gridWidth: number;
}

export default function Row({
  row,
  rowIndex,
  gridSize,
  setGrid,
  gridWidth,
}: RowProps) {
  return (
    <tr id={`${rowIndex}`}>
      {row.map((cellValue: BinaryValue, index: number) => {
        return (
          <Cell
            rowIndex={rowIndex}
            cellIndex={index}
            gridSize={gridSize}
            setGrid={setGrid}
            gridWidth={gridWidth}
            key={`${rowIndex}-${index}`}
          >
            {cellValue}
          </Cell>
        );
      })}
    </tr>
  );
}

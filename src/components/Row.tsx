import { BinaryValue } from "../types/gridTypes";
import Cell from "./Cell";

interface RowProps {
  row: BinaryValue[];
  rowIndex: number;
  gridWidth: number;
}

export default function Row({ row, rowIndex, gridWidth }: RowProps) {
  return (
    <tr id={`${rowIndex}`}>
      {row.map((cellValue: BinaryValue, index: number) => {
        return (
          <Cell
            rowIndex={rowIndex}
            cellIndex={index}
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

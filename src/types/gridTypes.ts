import { Dispatch, SetStateAction } from "react";

export type BinaryValue = 0 | 1;

export type GridType = BinaryValue[][];

export interface GridContextData {
  grid: GridType;
  gridSize: number;
  setGrid: Dispatch<SetStateAction<GridType>>;
}

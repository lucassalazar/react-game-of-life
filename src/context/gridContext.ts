import { createContext } from "react";
import { GridContextData } from "../types/gridTypes";

export const GridContext = createContext<GridContextData | undefined>(
  undefined,
);

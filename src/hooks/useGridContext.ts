import { useContext } from "react";
import { GridContext } from "../context/gridContext";

export function useGridContext() {
  const gridData = useContext(GridContext);

  if (gridData === undefined) {
    throw new Error("useGridContext must be used with a GridContext");
  }

  return gridData;
}

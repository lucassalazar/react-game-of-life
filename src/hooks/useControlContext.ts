import { useContext } from "react";
import { ControlContext } from "../context/controlContext";

export function useControlContext() {
  const controlData = useContext(ControlContext);

  if (controlData === undefined) {
    throw new Error("useControlData must be used with a ControlContext");
  }

  return controlData;
}

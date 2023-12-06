import { createContext } from "react";
import { ControlContextData } from "../types/controlTypes";

export const ControlContext = createContext<ControlContextData | undefined>(
  undefined,
);

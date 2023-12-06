export interface ControlContextData {
  generation: number;
  updateGeneration: () => void;
  restartGeneration: () => void;
}

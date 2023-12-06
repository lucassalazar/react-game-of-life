import { GridType } from "../types/gridTypes";

type NeighbourPositions = Record<string, [number, number]>;

export const checkNeighbours = (
  x: number,
  y: number,
  grid: GridType,
): number => {
  const neighbourPositions: NeighbourPositions = {
    top: [-1, 0],
    topRight: [-1, 1],
    right: [0, 1],
    rightBottom: [1, 1],
    bottom: [1, 0],
    bottomLeft: [1, -1],
    left: [0, -1],
    topLeft: [-1, -1],
  };

  let nNeighbours = 0;

  for (const key in neighbourPositions) {
    const [nx, ny] = neighbourPositions[key as keyof NeighbourPositions];

    nNeighbours += grid[x + nx]?.[y + ny];
  }

  return nNeighbours;
};

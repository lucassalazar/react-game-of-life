import { ChangeEvent, useCallback, useState, useMemo, useEffect } from "react";
import Grid from "./components/Grid";
import InputRange from "./components/InputRange";
import Control from "./components/Control";
import { checkNeighbours } from "./utils/check-neighbours";
import { GridType, BinaryValue } from "./components/Grid";

function App() {
  const [gridSize, setGridSize] = useState(15);
  const [generation, setGeneration] = useState(1);
  const [grid, setGrid] = useState<GridType>([]);

  const memoizedCreateGrid = useMemo(
    () =>
      (size: number): GridType => {
        const grid: GridType = [];

        for (let i = 0; i < size; i++) {
          const row: BinaryValue[] = new Array(size)
            .fill(0)
            .map(() => (Math.random() < 0.5 ? 0 : 1));
          grid.push(row);
        }

        return grid;
      },
    [gridSize],
  );

  useEffect(() => {
    restartGeneration();
  }, [gridSize]);

  const updateGridSize = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    setGridSize(value);
  }, []);

  const restartGeneration = () => {
    const newGrid = memoizedCreateGrid(gridSize);
    setGrid(newGrid);
    setGeneration(1);
  };

  const updateGeneration = useCallback(() => {
    const newGrid = grid.map((row, i) =>
      row.map((cell, j) => {
        const isAlive = !!cell;
        const nNeighbours = checkNeighbours(i, j, grid);

        if (isAlive) {
          if (nNeighbours < 2) {
            return 0;
          } else if (nNeighbours === 2 || nNeighbours === 3) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (nNeighbours === 3) {
            return 1;
          }
          return 0;
        }
      }),
    );

    const didGridChange = JSON.stringify(grid) !== JSON.stringify(newGrid);

    if (didGridChange) {
      setGrid(newGrid);
      setGeneration(generation + 1);
    }
  }, [grid, generation]);

  return (
    <div className="main-container">
      <div className="mx-auto min-w-[10ch] max-w-[35ch]">
        <h1 className="bold mb-5 mt-5 text-7xl">👾</h1>
        <h1 className="bold mb-5 text-4xl">Game of Life</h1>
        <InputRange
          min={5}
          max={20}
          updateGridSize={updateGridSize}
          gridSize={gridSize}
        />
        <Grid grid={grid} gridSize={gridSize} setGrid={setGrid} />
        <Control
          gridSize={gridSize}
          generation={generation}
          updateGeneration={updateGeneration}
          restartGeneration={restartGeneration}
        />
      </div>
    </div>
  );
}

export default App;

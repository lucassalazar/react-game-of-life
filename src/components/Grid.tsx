import { useState, useRef, Dispatch, SetStateAction, useEffect } from "react";
import Row from "./Row";

export type BinaryValue = 0 | 1;

export type GridType = BinaryValue[][];

interface GridProps {
  grid: GridType;
  gridSize: number;
  setGrid: Dispatch<SetStateAction<GridType>>;
}

function Grid({ grid, gridSize, setGrid }: GridProps) {
  const [gridWidth, setGridWidth] = useState(0);
  const parentRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    // Function to update gridWidth based on the actual size
    const updategridWidth = () => {
      if (parentRef.current) {
        const width = Math.floor(
          parentRef.current.getBoundingClientRect().width,
        );
        setGridWidth(width);
      }
    };

    // Initial call to set the initial width
    updategridWidth();

    return () => {};
  }, []);

  return (
    <div className="grid-container">
      <table className="grid" ref={parentRef}>
        <tbody>
          {grid.map((row: BinaryValue[], index: number) => {
            return (
              <Row
                row={row}
                rowIndex={index}
                gridSize={gridSize}
                setGrid={setGrid}
                gridWidth={gridWidth}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;

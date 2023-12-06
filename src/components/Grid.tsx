import { useState, useRef, useEffect } from "react";
import { BinaryValue } from "../types/gridTypes";
import Row from "./Row";
import { useGridContext } from "../hooks/useGridContext";

interface GridProps {}

function Grid({}: GridProps) {
  const { grid } = useGridContext();

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

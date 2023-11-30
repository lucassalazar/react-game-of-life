import { useState, useEffect, useCallback } from "react";

interface ControlProps {
  gridSize: number;
  generation: number;
  updateGeneration: () => void;
  restartGeneration: () => void;
}

export default function Control({
  gridSize,
  generation,
  updateGeneration,
  restartGeneration,
}: ControlProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      // Stop playing if gridSize changes
      setIsPlaying(false);
    }
  }, [gridSize, isPlaying]);

  useEffect(() => {
    let intervalId: number;

    const playGeneration = () => {
      setIsPlaying(true);
      intervalId = setInterval(() => {
        updateGeneration();
      }, 500);
    };

    const stopGeneration = () => {
      setIsPlaying(false);
      clearInterval(intervalId);
    };

    if (isPlaying) {
      playGeneration();
    }

    return () => {
      stopGeneration();
    };
  }, [isPlaying, updateGeneration]);

  const handlePlayClick = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      updateGeneration();
      setIsPlaying(true);
    }
  }, [isPlaying, updateGeneration]);

  return (
    <div>
      <label className="mb-2 block text-base font-medium text-white">
        Generation: {generation}
      </label>
      <div>
        <button
          className="mr-2 bg-[#553986e0] px-5 py-2 text-lg shadow-lg hover:bg-[#553986]"
          onClick={updateGeneration}
        >
          Step
        </button>
        <button
          className="mr-2 bg-[#553986e0] px-5 py-2 text-lg shadow-lg hover:bg-[#553986]"
          onClick={handlePlayClick}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
        <button
          className="bg-[#553986e0] px-5 py-2 text-lg shadow-lg hover:bg-[#553986]"
          onClick={() => {
            setIsPlaying(false);
            restartGeneration();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

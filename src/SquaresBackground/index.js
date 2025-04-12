import { useEffect, useState } from "react";
import "./SquaresBackground.css";

const SquaresBackground = () => {
  const [squares, setSquares] = useState([]);
  const [cols, setCols] = useState(0);
  const squareSize = 40;
  const navHeight = 80; // adjust as needed

  useEffect(() => {
    const generateSquares = () => {
      const width = window.innerWidth;
      // Use calc(100vh - navHeight)
      const height = window.innerHeight - navHeight;
      // Use Math.floor to avoid partially filled rows
      const newCols = Math.floor(width / squareSize);
      const rows = Math.floor(height / squareSize);
      const totalSquares = newCols * rows;

      setSquares(Array.from({ length: totalSquares }, (_, i) => i));
      setCols(newCols);
    };

    generateSquares();
    window.addEventListener("resize", generateSquares);
    return () => window.removeEventListener("resize", generateSquares);
  }, []);

  return (
    <div
      className="grid-background"
      style={{
        // Ensure container is the correct height
        height: `calc(100vh - ${navHeight}px)`,
      }}
    >
      {squares.map((id, index) => (
        <div
          key={id}
          style={{
            width: squareSize,
            height: squareSize,
            backgroundColor: "transparent",
            border: "1px solid #ebebeb",
          }}
        />
      ))}
    </div>
  );
};

export default SquaresBackground;

import React from "react";
import "./ResetBoard.css";

export default function ResetBoard({ clearBoard, resetGame }) {
  return (
    <>
      <div className="container">
        <button className="reset-btn btn btn-primary" onClick={clearBoard}>
          Clear Board
        </button>
        <button className="btn btn-success reset-score" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </>
  );
}

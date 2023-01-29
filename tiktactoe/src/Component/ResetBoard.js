import React from "react";
import "./ResetBoard.css";

export default function ResetBoard({ resetBoard, resetGame }) {
  return (
    <>
      <div className="container">
        <button className="reset-btn btn btn-primary" onClick={resetBoard}>
          Clear Game
        </button>
        <button className="btn btn-success reset-score" onClick={resetGame}>
          Reset Score
        </button>
      </div>
    </>
  );
}

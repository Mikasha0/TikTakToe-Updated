import Board from "./Component/Board";

function App() {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];

  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;

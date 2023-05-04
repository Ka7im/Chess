import { useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

type BoardProps = {
  board: Board;
  setBoard: (board: Board) => void;
};

const BoardComponent = ({ board, setBoard }: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  return (
    <div className="board">
      {board.cells.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                cell={cell}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
              />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BoardComponent;

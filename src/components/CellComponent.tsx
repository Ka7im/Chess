import { Cell } from "../models/Cell";

type CellProps = {
  cell: Cell;
  selected: boolean;
};

const CellComponent = ({ cell, selected }: CellProps) => {
  return (
    <div className={["cell", cell.color, selected ? "selected" : ""].join(" ")}>
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};

export default CellComponent;

import React, { useState } from "react";
import { Cell } from "./Cell";
import "./App.css";
import "./Board.css";

function onClickHandler() {
  alert("cell is clicked");
}

const DEFAULT_CELLS_ARRAY = [
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
  <Cell onClick={onClickHandler} />,
];

// const range = (start: number, end: number) =>
//   Array.from(Array(end - start + 1).keys()).map((x) => x + start);

export function Board() {
  const [cells, setCells] = useState(DEFAULT_CELLS_ARRAY);

  return (
    <>
      <div className="Board">
        {cells}
        {/* {[range(1, 9)].map((ID) => {
          return <Cell cellID={ID}></Cell>;
        })} */}
      </div>
    </>
  );
}

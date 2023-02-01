import React from "react";
import "./App.css";
import "./Game.css";
import { Board } from "./Board";
import { PawnsPile } from "./PawnsPile";

const babushkaNumber = 6;

export function Game() {
  return (
    <>
      <PawnsPile
        totalBabushkaNumber={babushkaNumber}
        // className="SideA"
      ></PawnsPile>
      <PawnsPile
        totalBabushkaNumber={babushkaNumber}
        // className="SideB"
      ></PawnsPile>
      <Board></Board>
    </>
  );
}

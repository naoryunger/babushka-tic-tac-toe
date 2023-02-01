import React from "react";
import "./App.css";
import { BabushkaTool } from "./BabushkaTool";

interface PawnsPileProps {
  totalBabushkaNumber: number;
}

export function PawnsPile({ totalBabushkaNumber }: PawnsPileProps) {
  return (
    <>
      <BabushkaTool babuskhaID={1} total={totalBabushkaNumber}></BabushkaTool>
      <BabushkaTool babuskhaID={2} total={totalBabushkaNumber}></BabushkaTool>
      <BabushkaTool babuskhaID={3} total={totalBabushkaNumber}></BabushkaTool>
      <BabushkaTool babuskhaID={4} total={totalBabushkaNumber}></BabushkaTool>
      <BabushkaTool babuskhaID={5} total={totalBabushkaNumber}></BabushkaTool>
      <BabushkaTool babuskhaID={6} total={totalBabushkaNumber}></BabushkaTool>
    </>
  );
}

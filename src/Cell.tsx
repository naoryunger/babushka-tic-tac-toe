import React, { useState } from "react";
import "./App.css";
import "./Cell.css";

interface CellProps {
  isOccupied?: Boolean;
  occupiedBy?: String;
  onClick: any;
}

export function Cell({ isOccupied = false, occupiedBy, onClick }: CellProps) {
  return <div className="Cell" onClick={onClick}></div>;
}

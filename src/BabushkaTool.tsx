import React from "react";
import "./App.css";
import "./BabushkaTool.css";

interface babushkaToolProps {
  babuskhaID: number;
  total: number;
}

export function BabushkaTool({ babuskhaID, total }: babushkaToolProps) {
  let size = {
    width: 320 * (babuskhaID / total),
    height: 616 * (babuskhaID / total),
  };
  return (
    <>
      <img
        style={size}
        className="Babushka"
        src={process.env.PUBLIC_URL + "/babushka.png"}
      ></img>
    </>
  );
}

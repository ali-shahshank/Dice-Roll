import React, { useState } from "react";
import "./RollDice.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Die from "../Die/Die";

const RollDice = () => {
  const sides = ["1", "2", "3", "4", "5", "6"]; // Bootstrap uses numbers

  const [die1, setDie1] = useState("1");
  const [die2, setDie2] = useState("1");
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      setDie1(sides[Math.floor(Math.random() * sides.length)]);
      setDie2(sides[Math.floor(Math.random() * sides.length)]);
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="col-sm-12 col-md-12 p-4 d-flex flex-column justify-content-center align-items-center">
      <div className="container p-4">
        <h2 className="fs-1 ">Roll The Dice</h2>
      </div>
      <div className="container p-4 ">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <div className="container p-4 ">
        <button
          className={rolling ? "RollDice-rolling" : ""}
          disabled={rolling}
          onClick={roll}
        >
          {rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    </div>
  );
};

export default RollDice;

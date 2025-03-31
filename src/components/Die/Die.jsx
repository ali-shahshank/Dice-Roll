import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

// Mapping dice face names to their corresponding icons
const diceIcons = {
  one: faDiceOne,
  two: faDiceTwo,
  three: faDiceThree,
  four: faDiceFour,
  five: faDiceFive,
  six: faDiceSix,
};

class Die extends Component {
  render() {
    const { face, rolling } = this.props;

    return (
      <>
        <div className="p-4">
          <FontAwesomeIcon
            style={{ height: "56px" }}
            icon={diceIcons[face]}
            className={`Die ${rolling ? "Die-shaking" : ""}`}
          />
        </div>
      </>
    );
  }
}

export default Die;

import React, { Component } from "react";
import "./RollDice.css";
import Die from "../Die/Die";

class RollDice extends Component {
  // Face numbers passed as default props
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);

    // States
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const { sides } = this.props;

    // Set rolling to true immediately
    this.setState({ rolling: true });

    setTimeout(() => {
      this.setState({
        die1: sides[Math.floor(Math.random() * sides.length)],
        die2: sides[Math.floor(Math.random() * sides.length)],
      });

      // Set rolling to false after dice update
      setTimeout(() => {
        this.setState({ rolling: false });
      }, 1000);
    }, 100);
  }

  render() {
    const { die1, die2, rolling } = this.state;
    const handleBtn = rolling ? "RollDice-rolling" : "";

    return (
      <>
        <div className="cols-sm-12 col-md-12 p-4 ">
          <h2>Dice Rolling</h2>
          <div className="container p-4 ">
            <div className="RollDice-container d-flex">
              <Die face={die1} rolling={rolling} />
              <Die face={die2} rolling={rolling} />
            </div>
            <button
              className={handleBtn}
              disabled={rolling}
              onClick={this.roll}
            >
              {rolling ? "Rolling..." : "Roll"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default RollDice;

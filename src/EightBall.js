import React, { useState } from "react";
import "./EightBall.css";

const initialText = "Think of a question";
const initialColor = "black";
const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length) + 1];

const EightBall = (props) => {
  const [color, setColor] = useState(initialColor);
  const [msg, setAnswer] = useState(initialText);

  const handleClick = () => {
    const { msg, color } = randomChoice(props.answers);
    setAnswer(msg);
    setColor(color);
  };

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <b>{msg}</b>
    </div>
  );
};

export default EightBall;

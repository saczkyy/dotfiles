import { useState } from "react";
import bubble_img from "./blob-haikei.svg";

export const Bubble = () => {
  const [left, setLeft] = useState(Math.random() * 140 + 1 - 20 + "%");

  const reset = () => {
    setLeft(Math.random() * 140 + 1 - 20 + "%");
  };
  return (
    <img
      src={bubble_img}
      id="bubble"
      onAnimationEnd={reset}
      style={{
        left: left,
        animationDelay: Math.random() * 2 + "s",
      }}
      alt=""
    />
  );
};

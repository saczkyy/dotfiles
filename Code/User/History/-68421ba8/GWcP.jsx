import { useState } from "react";
import bubble_img from "./blob-haikei.svg";

export const Bubble = () => {
  const [left, setLeft] = useState(Math.random() * 140 + 1 - 20 + "%");
  const [popped, setPopped] = useState("");

  const reset = (e) => {
    if (e.animationName === "bubbling_up") {
      setLeft(Math.random() * 140 + 1 - 20 + "%");
    }
  };
  const pop = (e) => {
    setPopped("popped");
  };
  return (
    <img
      src={bubble_img}
      id="bubble"
      onClick={pop}
      onAnimationIteration={reset}
      className={popped}
      style={{
        left: left,
        animationDelay: Math.random() * 2 + "s",
      }}
      alt=""
    />
  );
};

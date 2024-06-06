import { React, useEffect } from "react";

const amountOfBubbles = 2;
const bubbles = [];
export const Home = () => {
  useEffect(() => {
    for (var i = 0; i < amountOfBubbles; i++) {
      bubbles.push(i);
      console.log(bubbles);
    }
  }, []);
};

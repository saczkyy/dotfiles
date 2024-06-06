import { React, useEffect } from "react";

import { Bubble } from "../../components/Bubble";
import { Label } from "../../components/Label";

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

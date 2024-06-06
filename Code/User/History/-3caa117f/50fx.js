import "./static/css/style.css";
import kuflowe from "./static/images/kuflowe-mocne-puszka.png";
import warka from "./static/images/warka-piwo-puszka.png";
import zubr from "./static/images/zubr.png";
import zywiec from "./static/images/zywiec.png";
import zatecky from "./static/images/zatecky.png";

import piana from "./static/images/piana.svg";
import pianaKreska from "./static/images/piana-kreska.svg";

import { Bubble } from "./components/Bubble";
import { useEffect } from "react";

const amountOfBubbles = 2;
const bubbles = [];

function App() {
  useEffect(() => {
    for (var i = 0; i < amountOfBubbles; i++) {
      bubbles.push(i);
      console.log(bubbles);
    }
  }, []);

  return (
    <div className="App">
      <div id="title-wrapper" className="content-grid">
        <div className="title">
          <img src={kuflowe} className="beer" alt="" />
          <img src={zatecky} className="beer" alt="" />
          <img src={warka} className="beer" alt="" />
          <img src={zywiec} className="beer" alt="" />
          <img src={zubr} className="beer" alt="" />
        </div>
      </div>
      <div id="main-content-grid" className="content-grid">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <div id="pianaWrapper" className="full-width-image">
          {/* <img src={piana} id="piana" alt="" /> */}
          {/* <img src={pianaKreska} id="pianaKreska" alt="" /> */}
        </div>
        <div>
          <h1>piwko</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

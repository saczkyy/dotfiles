import "./static/css/style.css";
import kuflowe from "./static/images/kuflowe-mocne-puszka.png";
import warka from "./static/images/warka-piwo-puszka.png";
import zubr from "./static/images/zubr.png";
import zywiec from "./static/images/zywiec.png";
import zatecky from "./static/images/zatecky.png";

import { Bubble } from "./components/Bubble";
import { useEffect } from "react";
import { Label } from "./components/Label";

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

        <div>
          <h1>piwko</h1>
        </div>

        <Label
          nazwa="Łomża jasna pełna 400 bączek"
          zrodlo="Butelka"
          kolor={{
            ocena: "9",
            opis: "supisupisupisupisupisupisupisupisupisupisupi",
          }}
          butelka={{ ocena: "6", opis: "git" }}
          smak={{ ocena: "10", opis: ":0" }}
        >
          Bardzo dobre polecam serdecznie
        </Label>
      </div>
    </div>
  );
}

export default App;

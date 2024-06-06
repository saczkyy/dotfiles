import { React, useEffect, useState } from "react";
import { Bubble } from "../../components/Bubble";
import { Label } from "../../components/Label";

const amountOfBubbles = 2;
const bubbles = [];

export const Dodaj = () => {
  const [nazwa, setNazwa] = useState("");
  const [zdjecie, setZdjecie] = useState("");
  const [zrodlo, setZrodlo] = useState("");
  const [procenty, setProcenty] = useState("");
  const [cena, setCena] = useState("");
  const [pojemnosc, setPojemnosc] = useState("");
  const [kolor, setKolor] = useState("");
  const [butelka, setButelka] = useState("");
  const [smak, setSmak] = useState("");
  const [ocenka, setOcenka] = useState("");

  useEffect(() => {
    for (var i = 0; i < amountOfBubbles; i++) {
      bubbles.push(i);
      console.log(bubbles);
    }
  }, []);

  return (
    <div id="dodaj-content-grid" className="content-grid">
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

      <div style={{ zIndex: 2 }} className="breakout">
        <h3>
          <a href="/">&lt; Strona główna</a>
        </h3>
      </div>
      <div id="formWrapper"></div>
      <div style={{ zIndex: 2 }} className="full-width-image">
        <Label
          nazwa={nazwa}
          zdjecie={zdjecie}
          zrodlo={zrodlo}
          procenty={procenty}
          cena={cena}
          pojemnosc={pojemnosc}
          kolor={kolor}
          butelka={butelka}
          smak={smak}
        >
          {ocenka}
        </Label>
      </div>
    </div>
  );
};

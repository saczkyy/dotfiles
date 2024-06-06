import { React, useEffect, useState } from "react";
import { Bubble } from "../../components/Bubble";
import { Label } from "../../components/Label";
import { logDOM } from "@testing-library/react";

const amountOfBubbles = 2;
const bubbles = [];

export const Dodaj = () => {
  const [nazwa, setNazwa] = useState("");
  const [zdjecie, setZdjecie] = useState("");
  const [zrodlo, setZrodlo] = useState("");
  const [procenty, setProcenty] = useState("");
  const [cena, setCena] = useState("");
  const [pojemnosc, setPojemnosc] = useState("");
  const [kolor, setKolor] = useState({ ocenka1: "", ocenka2: "" });
  const [butelka, setButelka] = useState({ ocenka1: "", ocenka2: "" });
  const [smak, setSmak] = useState({ ocenka1: "", ocenka2: "" });
  const [opis, setOpis] = useState("");
  const [dane, setDane] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDane({
      zdjecie: zdjecie,
      nazwa: nazwa,
      zrodlo: zrodlo,
      procenty: procenty,
      cena: cena,
      pojemnosc: pojemnosc,
      kolor: kolor,
      butelka: butelka,
      smak: smak,
      opis: opis,
    });
    console.log("dane: ", dane);
    const items = JSON.parse(localStorage.getItem("piwka") ?? []);
    console.log("old items: ", items);
    const newItems = JSON.stringify([...items, dane]);
    console.log("items: ", newItems);
    localStorage.setItem("piwka", newItems);

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  useEffect(() => {
    for (var i = 0; i < amountOfBubbles; i++) {
      bubbles.push(i);
    }
    if (!localStorage.getItem("piwka")) {
      localStorage.setItem("piwka", []);
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
      <form onSubmit={handleSubmit} style={{ zIndex: 2 }} id="formWrapper">
        <div className="inputDiv">
          <label htmlFor="nazwa">Nazwa</label>
          <input
            type="text"
            name="nazwa"
            value={nazwa}
            onChange={(e) => setNazwa(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="zrodlo">Pojemnik</label>
          <input
            type="text"
            name="zrodlo"
            value={zrodlo}
            onChange={(e) => setZrodlo(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="procenty">Procenty</label>
          <input
            type="text"
            name="procenty"
            value={procenty}
            onChange={(e) => setProcenty(e.target.value)}
          />
        </div>
        <div className="ocenkaDiv">
          <label htmlFor="kolor">Kolor</label>
          <div>
            <div>
              <input
                type="text"
                name="ocenka1"
                value={kolor.ocenka1}
                onChange={(e) =>
                  setKolor({ ocenka1: e.target.value, ocenka2: kolor.ocenka2 })
                }
              />
              <p>Ocena pierwszego rabina</p>
            </div>
            <div>
              <input
                type="text"
                name="ocenka2"
                value={kolor.ocenka2}
                onChange={(e) =>
                  setKolor({ ocenka1: kolor.ocenka1, ocenka2: e.target.value })
                }
              />
              <p>Ocena drugiego rabina</p>
            </div>
          </div>
        </div>
        <div className="inputDiv">
          <label htmlFor="cena">Cena</label>
          <input
            type="text"
            name="cena"
            value={cena}
            onChange={(e) => setCena(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="pojemnosc">Pojemność</label>
          <input
            type="text"
            name="pojemnosc"
            value={pojemnosc}
            onChange={(e) => setPojemnosc(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="zdjecie">Wybierz zdjęcie</label>
          <input
            type="file"
            name="zdjecie"
            onChange={(e) => setZdjecie(URL.createObjectURL(e.target.files[0]))}
          />
        </div>
        <div className="ocenkaDiv">
          <label htmlFor="butelka">Butelka</label>
          <div>
            <div>
              <input
                type="text"
                name="ocenka1"
                value={butelka.ocenka1}
                onChange={(e) =>
                  setButelka({
                    ocenka1: e.target.value,
                    ocenka2: butelka.ocenka2,
                  })
                }
              />
              <p>Ocena pierwszego rabina</p>
            </div>
            <div>
              <input
                type="text"
                name="ocenka2"
                value={butelka.ocenka2}
                onChange={(e) =>
                  setButelka({
                    ocenka1: butelka.ocenka1,
                    ocenka2: e.target.value,
                  })
                }
              />
              <p>Ocena drugiego rabina</p>
            </div>
          </div>
        </div>
        <div className="inputDiv">
          <label htmlFor="opis">Opis</label>
          <textarea
            rows={4}
            type="text"
            name="opis"
            value={opis}
            onChange={(e) => setOpis(e.target.value)}
          />
        </div>

        <button type="submit" id="saveButton">
          ZAPISZ OCENKE!
        </button>

        <div className="ocenkaDiv">
          <label htmlFor="smak">Smak</label>
          <div>
            <div>
              <input
                type="text"
                name="ocenka1"
                value={smak.ocenka1}
                onChange={(e) =>
                  setSmak({ ocenka1: e.target.value, ocenka2: smak.ocenka2 })
                }
              />
              <p>Ocena pierwszego rabina</p>
            </div>
            <div>
              <input
                type="text"
                name="ocenka2"
                value={smak.ocenka2}
                onChange={(e) =>
                  setSmak({ ocenka1: smak.ocenka1, ocenka2: e.target.value })
                }
              />
              <p>Ocena drugiego rabina</p>
            </div>
          </div>
        </div>
      </form>
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
          {opis}
        </Label>
      </div>
    </div>
  );
};

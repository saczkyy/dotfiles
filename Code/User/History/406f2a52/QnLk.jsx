import { React, useEffect, useRef, useState } from "react";
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
  const dane = useRef();

  const createResponseObjectAndSaveInCache = (media) => {
    const response = new Response(media, {
      status: 200,
      statusText: "Ok",
      headers: {
        "content-type": media.type,
        "content-length": media.size,
        "X-file": media.name,
      },
    });

    window.caches.open("cachename").then((cache) => {
      let name = response.headers.get("X-file");
      // eslint-disable-next-line no-restricted-globals
      let url = new URL(`/${Date.now()}/${name}`, location.origin);
      cache.put(url, response);
      return url.href;
    });
  };

  const displayFromCache = async (href) => {
    const cache = await caches.open("cachename");
    let response = await cache.match(href);
    if (!response) {
      return;
    }
    let blob = await response.blob();
    return URL.createObjectURL(blob);
  };

  document.querySelector("input").addEventListener("change", (e) => {
    let media = e.target.files[0];
    if (media) {
      document.querySelector("img").src = URL.createObjectURL(media);
      createResponseObjectAndSaveInCache(media);
    }
  });

  // display cached media if there is on load
  displayFromCache();

  const handleSubmit = (e) => {
    e.preventDefault();
    dane.current = {
      zdjecie: createResponseObjectAndSaveInCache(zdjecie),
      nazwa: nazwa,
      zrodlo: zrodlo,
      procenty: procenty,
      cena: cena,
      pojemnosc: pojemnosc,
      kolor: kolor,
      butelka: butelka,
      smak: smak,
      opis: opis,
    };
    const items = localStorage.getItem("piwka")
      ? JSON.parse(localStorage.getItem("piwka"))
      : [];
    const newItems = JSON.stringify([...items, dane.current]);
    localStorage.setItem("piwka", newItems);

    setTimeout(() => {
      window.location.href = "/";
    }, 300);
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
                value={kolor.ocena1}
                onChange={(e) =>
                  setKolor({ ocena1: e.target.value, ocena2: kolor.ocena2 })
                }
              />
              <p>Ocena pierwszego rabina</p>
            </div>
            <div>
              <input
                type="text"
                name="ocenka2"
                value={kolor.ocena2}
                onChange={(e) =>
                  setKolor({ ocena1: kolor.ocena1, ocena2: e.target.value })
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
            onChange={(e) => setZdjecie(e.target.files[0])}
          />
        </div>
        <div className="ocenkaDiv">
          <label htmlFor="butelka">Butelka</label>
          <div>
            <div>
              <input
                type="text"
                name="ocenka1"
                value={butelka.ocena1}
                onChange={(e) =>
                  setButelka({
                    ocena1: e.target.value,
                    ocena2: butelka.ocena2,
                  })
                }
              />
              <p>Ocena pierwszego rabina</p>
            </div>
            <div>
              <input
                type="text"
                name="ocenka2"
                value={butelka.ocena2}
                onChange={(e) =>
                  setButelka({
                    ocena1: butelka.ocena1,
                    ocena2: e.target.value,
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
                value={smak.ocena1}
                onChange={(e) =>
                  setSmak({ ocena1: e.target.value, ocena2: smak.ocena2 })
                }
              />
              <p>Ocena pierwszego rabina</p>
            </div>
            <div>
              <input
                type="text"
                name="ocenka2"
                value={smak.ocena2}
                onChange={(e) =>
                  setSmak({ ocena1: smak.ocena1, ocena2: e.target.value })
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
          zdjecie={URL.createObjectURL(zdjecie)}
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

import barcode from "./barcode.webp";

const colorPool = 600;

export const Label = ({
  nazwa,
  cena,
  procenty,
  kolor,
  smak,
  butelka,
  children,
  zrodlo,
  pojemnosc,
}) => {
  const r = Math.random() * 255;
  const g = Math.random() * Math.min(colorPool - r, 255);
  const b = Math.random() * Math.min(colorPool - r - g, 255);
  return (
    <div
      className="etykieta full-width-image content-grid"
      style={{
        backgroundColor: `rgb( ${r} , ${g} ,${b})`,
      }}
    >
      <div className="etykietaWrapper">
        <img src="" alt="" />
        <div className="ingredients">
          <div className="labelOcenka">{children}</div>
          <div className="labelTable">
            <table>
              <tr>
                <th></th>
                <th>
                  Sędzia nr.1
                  <span
                    style={{
                      fontSize: "80%",
                      verticalAlign: "text-top",
                      fontStyle: "normal",
                      fontWeight: 400,
                    }}
                  >
                    *
                  </span>
                </th>
                <th>
                  Sędzia nr.2
                  <span
                    style={{
                      fontSize: "80%",
                      verticalAlign: "text-top",
                      fontStyle: "normal",
                      fontWeight: 400,
                    }}
                  >
                    *
                  </span>
                </th>
              </tr>
              <tr>
                <th>Kolor</th>
                <td>{kolor.ocena1}</td>
                <td>{kolor.ocena2}</td>
              </tr>
              <tr>
                <th>Butelka</th>
                <td>{butelka.ocena1}</td>
                <td>{butelka.ocena2}</td>
              </tr>
              <tr>
                <th>Smak</th>
                <td>{smak.ocena1}</td>
                <td>{smak.ocena2}</td>
              </tr>
            </table>
            <p>
              * - Subiektywna ocena od 1 do 10, czym wieksza liczba tym lepsza
              ocena <br />
              ** - Do wyboru: Nalewak, butelka, puszka
            </p>
          </div>
          <div className="labelInfo">
            <p>{nazwa}</p>
            <p>{zrodlo}**</p>
            <p>{cena}zł</p>

            <p className="pojemnosc">{pojemnosc}ml</p>
            <p className="alk">alk. {procenty}% obj</p>
          </div>
          <div className="labelBarcode">
            <img src={barcode} alt="barcode" />
          </div>
        </div>
      </div>
    </div>
  );
};

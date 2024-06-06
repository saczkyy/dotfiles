import barcode from "./barcode.webp";

const colorPool = 600;

export const Label = ({ name, kolor, smak, butelka, children }) => {
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
          <div className="labelInfo"></div>
          <div className="labelTable">
            <table>
              <tr>
                <th></th>
                <th>Ocenka</th>
                <th>Dodatkowe info</th>
              </tr>
              <tr>
                <th>Kolor</th>
                <tr>{kolor.ocena}</tr>
                <tr>{kolor.opis}</tr>
              </tr>
              <tr>
                <th>Butelka</th>
                <tr>{butelka.ocena}</tr>
                <tr>{butelka.opis}</tr>
              </tr>
              <tr>
                <th>Smak</th>
                <tr>{smak.ocena}</tr>
                <tr>{smak.opis}</tr>
              </tr>
            </table>
          </div>
          <div className="labelOcenka">{children}</div>
          <div className="labelBarcode">
            <img src={barcode} alt="barcode" />
          </div>
        </div>
      </div>
    </div>
  );
};

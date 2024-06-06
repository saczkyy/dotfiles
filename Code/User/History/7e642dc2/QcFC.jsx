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
                <th>Sędzia nr.1*</th>
                <th>
                  Sędzia nr.2
                  <span
                    style={{
                      fontSize: "80%",
                      verticalAlign: "text-top",
                      fontStyle: "normal",
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
            <p></p>
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

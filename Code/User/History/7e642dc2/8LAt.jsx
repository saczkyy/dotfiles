import barcode from "./barcode.webp";

const colorPool = 600;

export const Label = ({ name }) => {
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
              </tr>
              <tr>
                <th></th>
              </tr>
            </table>
          </div>
          <div className="labelOcenka"></div>
          <div className="labelBarcode">
            <img src={barcode} alt="barcode" />
          </div>
        </div>
      </div>
    </div>
  );
};

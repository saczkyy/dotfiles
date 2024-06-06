import bubble_img from "./static/images/blob-haikei.svg";
import "Bubble.styles";

export const Bubble = () => {
  return (
    <div id="bubble">
      <img
        src={bubble_img}
        style={{ left: Math.random() * 100 + 1 + "%" }}
        alt=""
      />
    </div>
  );
};
import bubble_img from "./blob-haikei.svg";

export const Bubble = () => {
  var left = Math.random() * 100 + 1 + "%";
  return (
    <div id="bubble">
      <img src={bubble_img} style={{ left: left }} alt="" />
    </div>
  );
};

import bubble_img from "./blob-haikei.svg";

export const Bubble = ({ left }) => {
  return (
    <div id="bubble">
      <img src={bubble_img} style={{ left: "40%" }} alt="" />
    </div>
  );
};

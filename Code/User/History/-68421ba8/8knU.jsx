import bubble_img from "./blob-haikei.svg";

export const Bubble = ({ l }) => {
  return (
    <div id="bubble">
      <img src={bubble_img} style={{ left: l }} alt="" />
    </div>
  );
};

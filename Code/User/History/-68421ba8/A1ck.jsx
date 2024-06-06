import bubble_img from "./blob-haikei.svg";

export const Bubble = ({ left }) => {
  return (
    <div id="bubble" style={{ left: left }}>
      <img src={bubble_img} alt="" />
    </div>
  );
};

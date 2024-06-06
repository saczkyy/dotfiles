import bubble_img from "./blob-haikei.svg";

export const Bubble = ({ left }) => {
  return <img src={bubble_img} id="bubble" style={{ left: left }} alt="" />;
};

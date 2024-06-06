import bubble_img from "./blob-haikei.svg";

export const Bubble = () => {
  return (
    <img
      src={bubble_img}
      id="bubble"
      style={{
        left: Math.random() * 140 + 1 - 15 + "%",
        animationDelay: Math.random() * 2 + "s",
      }}
      alt=""
    />
  );
};

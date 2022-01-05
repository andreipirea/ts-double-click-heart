import "./ImageCard.scss";
import React, { useState } from "react";

const ImageCard = () => {
  const [clickTime, setClickTime] = useState<number>(0);
  const [likes, setLikes] = useState<number>(0);

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const loveMe = document.querySelector(".loveMe")!;

    if (clickTime === 0) {
      setClickTime(new Date().getTime());
    } else {
      if (new Date().getTime() - clickTime < 800) {
        const heart = document.createElement("i");
        heart.classList.add("fas");
        heart.classList.add("fa-heart");

        const x = e.clientX;
        const y = e.clientY;

        const target = e.target as HTMLElement;

        const offsetTop = target.offsetTop;
        const offsetLeft = target.offsetLeft;

        const innerX = x - offsetLeft;
        const innerY = y - offsetTop;

        heart.style.top = `${innerY}px`;
        heart.style.left = `${innerX}px`;

        loveMe.appendChild(heart);

        setLikes((prevLike) => prevLike + 1);

        setTimeout(() => heart.remove(), 1000);
        setClickTime(0);
      } else {
        setClickTime(new Date().getTime());
      }
    }
  };

  return (
    <>
      <h3>
        Double click on the image to <i className="fas fa-heart"></i> it
      </h3>
      <small>
        You liked it <span id="times">{likes}</span> times
      </small>
      <div className="loveMe" onClick={(e) => handleDoubleClick(e)}></div>
    </>
  );
};

export default ImageCard;

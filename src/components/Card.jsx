import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  const [clicks, setClicks] = useState([]);
  const [points, setPoints] = useState(0);

  const handleClick = (e) => {
    setPoints(points + 4);

    const cardRect = e.currentTarget.getBoundingClientRect(); // Get card's position and size
    const x = e.clientX - cardRect.left; // Calculate the x position relative to the card
    const y = e.clientY - cardRect.top; // Calculate the y position relative to the card

    const newClick = {
      id: uuidv4(), // Unique ID for each click
      x,
      y,
    };
    setClicks([...clicks, newClick]);

    // Remove the click effect after the animation completes (2s)
    setTimeout(() => {
      setClicks((clicks) => clicks.filter((click) => click.id !== newClick.id));
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-[20px] justify-center items-center">
      <div className="card-container w-[300px] h-[300px] bg-green-500 relative cursor-pointer">
        <button onClick={handleClick} className="card size-full">
          <div className="cat relative w-full h-full rounded-full bg-red-500"></div>
          {/* Render the fading texts */}
          {clicks.map((click) => (
            <p
              key={click.id}
              className="absolute z-[20] text-black text-[30px] font-bold animate-fade-up"
              style={{
                left: click.x - 15, // Adjust to center text around the click
                top: click.y - 20, // Adjust to center text above the click
              }}
            >
              +4
            </p>
          ))}
        </button>
      </div>

      <p>Points: {points}</p>
    </div>
  );
};

export default Card;

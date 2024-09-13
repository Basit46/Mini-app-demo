import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [username, setUsername] = useState("Mate");

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();

      if (window.Telegram.WebApp.initDataUnsafe.user) {
        const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;
        setUsername(telegramUser.username || "Mate");
      } else {
        setUsername("Mate");
      }
    } else {
      console.error("Telegram WebApp not available");
    }
  }, []);

  const tg = window.Telegram.WebApp;

  const handleClose = () => {
    tg.close();
  };

  return (
    <div className="hero relative">
      <Navbar />
      <div>Username: {username}</div>

      <button
        className="bg-[#ff0000] px-[20px] py-[6px] text-white"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default Hero;

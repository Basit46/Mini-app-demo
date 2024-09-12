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

  return (
    <div className="hero relative h-screen">
      <Navbar />
      <div>Username: {username}</div>
      <img
        className=" rounded-full"
        src={window.Telegram.WebApp?.initDataUnsafe?.user?.photo_url}
        alt="userPhoto"
      />
      <p>{window.Telegram.WebApp?.initDataUnsafe?.user?.photo_url}</p>
    </div>
  );
};

export default Hero;

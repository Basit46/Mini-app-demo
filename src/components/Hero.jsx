import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [username, setUsername] = useState("Mate"); // default fallback username

  useEffect(() => {
    // Ensure the Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      // Notify Telegram that the app is ready
      window.Telegram.WebApp.ready();

      // Try to get the username from initDataUnsafe
      if (
        window.Telegram.WebApp.initDataUnsafe &&
        window.Telegram.WebApp.initDataUnsafe.user
      ) {
        const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;
        setUsername(telegramUser.username || "Mate"); // Extracting the username from the user object
      } else {
        console.warn("Telegram WebApp did not provide initDataUnsafe.user");
      }
    } else {
      console.error("Telegram WebApp not available");
    }
  }, []);

  return (
    <div className="hero relative h-screen">
      <Navbar />
      <div>Username: {username}</div>
    </div>
  );
};

export default Hero;

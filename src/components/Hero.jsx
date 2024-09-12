import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [username, setUsername] = useState("Mate"); // default fallback username

  useEffect(() => {
    // Ensure the Telegram WebApp is initialized
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      try {
        // Parse the initData for the username
        const initData = window.Telegram.WebApp.initData;
        const params = new URLSearchParams(initData);
        const usernameFromTelegram = params.get("username");

        // Update the username state if available
        if (usernameFromTelegram) {
          setUsername(usernameFromTelegram);
        }
      } catch (error) {
        console.error("Failed to parse Telegram initData: ", error);
      }
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

import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  console.log(window.Telegram.WebApp.initData.username);
  return (
    <div className="hero relative h-screen">
      <Navbar />

      <div>Username: {window.Telegram.WebApp.initData.username || "Mate"}</div>
    </div>
  );
};

export default Hero;

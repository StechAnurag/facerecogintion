import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "./face-icon.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 40 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "10px" }} src={face} alt="face-logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

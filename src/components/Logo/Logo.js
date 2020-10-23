import React from "react";
import Tilt from "react-tilt";
import logo from "./ai.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-22"
        options={{ max: 25 }}
        style={{ height: 200, width: 200 }}
      >
        <div
          className="Tilt-inner pa3"
          style={{ paddingTop: "50px", paddingLeft: "20px" }}
        >
          <img src={logo} height="125px" alt="sipintar" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

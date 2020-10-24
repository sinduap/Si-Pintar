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
        style={{ height: "150px", width: "150px" }}
      >
        <div
          className="Tilt-inner pa3"
          style={{ paddingTop: "auto", paddingLeft: "auto" }}
        >
          <img src={logo} height="100px" alt="sipintar" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

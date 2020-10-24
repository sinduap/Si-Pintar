import React from "react";

const Navigation = ({ onRouteChange, isSignIn }) => {
  if (isSignIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signOut")}
          className="f3 link dim underline pt2 pr5 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signIn")}
          className="f3 link dim underline pt2 pr5 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("resigter")}
          className="f3 link dim underline pt2 pr5 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;

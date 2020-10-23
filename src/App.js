import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from ".components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "8d098c608e6d49c2bdfa9d842b75af1f",
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 250,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    return event.target.value;
  };

  onSubmit = () => {
    console.log("Clicked");
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        // URL
        "https://samples.clarifai.com/metro-north.jpg"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err, "there was an error");
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Particles className="particles" params={particlesOptions} />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;

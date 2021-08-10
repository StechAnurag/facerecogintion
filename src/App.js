import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigtation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
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

  onInputChange = (e) => {
    console.log(e.target.value);
  };

  onBtnSubmit = () => {
    console.log("Button clicked");
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigtation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: 'fbe254bd6ffe40e8ac43148219f9cecb'
});

const particlesOptions = {
  particles: {
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 80
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  calculateFaceBox = clarifaiData => {
    const face = clarifaiData.outputs[0].data.regions[0].region_info.bounding_box;
    const inputImage = document.getElementById('inputImage');
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height
    };
  };

  displayFaceBox = box => this.setState({ box });

  onBtnSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        'a403429f2ddf4b49b307e318f00e528b',
        // `53e1df302c079b3db8a0a36033ed2d15`,
        this.state.input
      )
      .then(response => this.displayFaceBox(this.calculateFaceBox(response)))
      .catch(err => console.log('------>', err));
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

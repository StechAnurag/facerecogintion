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

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;

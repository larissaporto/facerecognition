import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from "particles-bg";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: null,
      box: {},
      route: "signin",
      isSignedIn: false,
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("http://localhost:3000/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: this.state.input }),
    })
      .then((response) => response.json())
      .then((result) => this.displayFaceBox(this.calculateFaceLocation(result)))
      .catch((e) => console.log(e));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  render() {
    const { isSignedIn, box, imageUrl, route } = this.state;
    return (
      <>
        <div className="App">
          <ParticlesBg type="cobweb" bg={true} />
          <Navigation
            isSignedIn={isSignedIn}
            onRouteChange={this.onRouteChange}
          />
          {route === "home" ? (
            <>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </>
          ) : route === "signin" || route === "signout" ? (
            <Signin onRouteChange={this.onRouteChange} />
          ) : (
            <Signup onRouteChange={this.onRouteChange} />
          )}
        </div>
      </>
    );
  }
}

export default App;

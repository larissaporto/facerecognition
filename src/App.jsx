import { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navigation />
          <Logo />
          <ImageLinkForm />
          {/* <FaceRecognition /> */}
        </div>
      </>
    )
  }
}

export default App

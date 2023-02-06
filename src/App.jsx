import Navar from "./components/Navar"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import MyProyects from "./components/MyProyects"
import './App.css'
import Home from "./Pages/Home"

function App() {

  return (
    <div className="App">
      <Navar />
      <Home />
      <AboutMe />
      <MyProyects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

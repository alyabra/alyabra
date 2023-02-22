import Navar from "./components/Navar"
import Footer from "./components/Footer"
import AboutMe from "./Pages/AboutMe"
import Contact from "./Pages/Contact"
import MyProyects from "./Pages/MyProyects"
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

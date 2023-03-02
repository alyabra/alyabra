import Navar from "./components/Navar"
import Footer from "./components/Footer"
import AboutMe from "./Pages/AboutMe"
import Contact from "./Pages/Contact"
import MyProyects from "./Pages/MyProyects"
import './App.css'
import Home from "./Pages/Home"
import { useInView } from 'react-intersection-observer';

function App() {
  const { ref: refAboutMe , inView: isVisibleAboutMe} = useInView({
    threshold: 0.7,
  });
  const { ref: refMyproyect , inView: isVisisVisibleMyproyects} = useInView({
    threshold: 0.5,
  });
  const { ref: refHome , inView: isVisisVisibleHome} = useInView({
    threshold: 0.7,
  });
  const { ref: refContact , inView: isVisiisVisibleContact} = useInView({
    threshold: 1,
  });
  const visibles = {isVisibleAboutMe,isVisisVisibleMyproyects, isVisisVisibleHome, isVisiisVisibleContact }



  return (
    <div className="App">
      <Navar visibles={visibles}/>
      <Home myref={refHome}/>
      <AboutMe myref={refAboutMe}/>
      <MyProyects myref={refMyproyect}/>
      <Contact myref={refContact}/>
      <Footer />
    </div>
  )
}

export default App

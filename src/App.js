import './App.css';
import Navbar from "./Pages/Navbar/Navbar";
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Resume from './Pages/Resume/Resume';
import Exp from './Pages/Experience/Exp';
import ContactMe from './Pages/Contact/ContactMe';
import Github from './Pages/Skills/Github';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <AboutMe />
      <Resume />
      <Github />
      <Exp />
      <ContactMe />
    </div>
  );
}

export default App;
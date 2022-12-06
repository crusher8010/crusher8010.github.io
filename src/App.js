import './App.css';
import Navbar from "./Pages/Navbar/Navbar";
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Resume from './Pages/Resume/Resume';
import Exp from './Pages/Experience/Exp';
import ContactMe from './Pages/Contact/ContactMe';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <AboutMe />
      <Resume />
      <Exp />
      <ContactMe />
    </div>
  );
}

export default App;
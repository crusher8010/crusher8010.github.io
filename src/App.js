import './App.css';
import Navbar from "./Pages/Navbar/Navbar";
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Resume from './Pages/Resume/Resume';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <AboutMe />
      <Resume />
    </div>
  );
}

export default App;
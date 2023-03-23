import "./css/app.scss"
import Example from './components/hamburger';
import Navbar from './components/navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Landing from './components/landing';
import Contact from "./components/contact";
import Education from "./components/education";
import Skills from "./components/skills"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='left'>
          <Navbar></Navbar>
          {/* <Example></Example> */}
        </div>
        <div className='right'>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/aboutMe" element={<Landing/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Landing/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
        </div>
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;

import "./css/app.scss"
import Navbar from './components/navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Landing from './components/landing';
import Contact from "./components/contact";
import Education from "./components/education";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='left'>
          <Navbar></Navbar>
        </div>
        <div className='right'>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/aboutMe" element={<About/>} />
            <Route path="/skills" element={<Landing/>} />
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

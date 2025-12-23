import './App.css';
import {BrowserRouter} from 'react-router-dom'

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';

function App() {
  return (
    <main>
        <BrowserRouter>
          <Navbar></Navbar>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Contact></Contact>
          <Footer></Footer>
        </BrowserRouter>
        
        
    </main>
    
  );
}

export default App;

import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';

function App() {
  return (
    <main>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Footer></Footer>

    </main>
    
  );
}

export default App;

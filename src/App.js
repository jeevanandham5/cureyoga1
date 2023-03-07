import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;


import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  let style = {

      color:'white',
      backgroundColor:"red"

  }

  return (
    <>

    <Navbar style={style}/>

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About style={style}/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;

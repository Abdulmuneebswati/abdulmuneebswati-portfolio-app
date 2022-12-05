import React, { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Recommendations from './Components/Recommendations/Recommendations';
import Services from './Components/services/Services';
import Technology from './Components/Technology/Technology';
import { themeContext } from "./Context";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode? "black":"",
    color: darkMode? "white":"",
    }}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Technology/>
    <Education/>
    <Portfolio/>
    <Recommendations/>
    <Contact/>
    <Footer/>
    
      
    </div>
    
  );
}

export default App;

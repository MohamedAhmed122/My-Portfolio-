import React from 'react';

import './App.css';
import HeroBlock from './Components/HomeComponents/Hero/Hero';
import Contact from './Components/Contact/Contact'
import Navbar from './Layout/Navbar/Navbar';
import HomeIcons from './Components/HomeComponents/HomeIcons/HomeIcons';
import Dev from './Components/HomeComponents/Dev/Dev';
import Footer from './Layout/Navbar/Footer';
import Projects from './Components/HomeComponents/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AboutPage /> */}
      <HeroBlock />
      <HomeIcons />
      <Dev  /> 
      <Projects />
      <Contact />
      <Footer />
     

    </div>
  );
}

export default App;

import React from 'react';

import './App.css';

import Navbar from './Layout/Navbar/Navbar';

import Footer from './Layout/Navbar/Footer';
import HomeIcons from './Components/HomeComponents/HomeIcons/HomeIcons';
import Projects from './Components/HomeComponents/Projects/Projects';
import Hero from './Components/HomeComponents/Hero/Hero'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AboutPage /> */}
      <Hero />
      <HomeIcons />
      <Projects />
      <Contact />
      
      <Footer />
     

    </div>
  );
}

export default App;

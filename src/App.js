import React from 'react';

import './App.css';

import Navbar from './Layout/Navbar/Navbar';

import Footer from './Layout/Navbar/Footer';
import HomeIcons from './Components/HomeComponents/HomeIcons/HomeIcons';

import Hero from './Components/HomeComponents/Hero/Hero'
import Contact from './Components/Contact/Contact'
import Projects from './Components/HomeComponents/Projects/Projects';
import Header from './Layout/Header/Header';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HomeIcons />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import HeroBlock from './Components/HomeComponents/Hero/Hero';
// import AboutPage from './Pages/AboutPage/AboutPage';
import Navbar from './Layout/Navbar/Navbar';
import HomeIcons from './Components/HomeComponents/HomeIcons/HomeIcons';
import Dev from './Components/HomeComponents/Dev/Dev';
import Footer from './Layout/Navbar/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AboutPage /> */}
      <HeroBlock />
      <HomeIcons />
      <Dev  /> 
      <Footer />

    </div>
  );
}

export default App;

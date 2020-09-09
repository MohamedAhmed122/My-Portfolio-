import React from 'react';

import './App.css';
import HeroBlock from './Components/HomeComponents/Hero/Hero';
// import AboutPage from './Pages/AboutPage/AboutPage';
import Navbar from './Layout/Navbar/Navbar';
import HomeIcons from './Components/HomeComponents/HomeIcons/HomeIcons';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AboutPage /> */}
      <HeroBlock />
      <HomeIcons />
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import HeroBlock from './Components/HomeComponents/Hero/Hero';
// import AboutPage from './Pages/AboutPage/AboutPage';
import Navbar from './Layout/Navbar/Navbar';
import HomeIcons from './Components/HomeComponents/HomeIcons/HomeIcons';
import ProgressBar from './Components/Custom-ProgessBar/ProgessBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AboutPage /> */}
      <HeroBlock />
      <HomeIcons />
      <ProgressBar done="70" />
      

    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import Navbar from './Layout/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutPage />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import './styles/main.css'

import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        {/* <Header/> */}
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

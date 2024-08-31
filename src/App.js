import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Aboutus from './components/Aboutus';
import Chit from './components/chit';
import Newchitgroup from './components/newchitgroup';
import Ongoingchitgroup from './components/ongoingchitgroup';
import Beginner from './components/beginner';
import Pro from './components/pro';
import Contactus from './components/contactus';
import NavBar from './components/navbar';

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/chit" element={<Chit />} />
        <Route path="/newchitgroup" element={<Newchitgroup />} />
        <Route path="/ongoingchitgroup" element={<Ongoingchitgroup />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;



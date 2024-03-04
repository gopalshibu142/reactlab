import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import Business from './components/Business';
import Sports from './components/Sports'
import './App.css';
import Tech from './components/Tech';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigation/>} />
      <Route path="/business" element={<Business/>} />
      <Route path="/sports" element={<Sports/>} />
      <Route path="/tech" element={<Tech/>} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';     
import Login from './pages/Login';   
import Register from './pages/Register';
import TestAPI from './TestAPI';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testapi" element={<TestAPI />} />
      </Routes>
    </Router>
  );
}

export default App;

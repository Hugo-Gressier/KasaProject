import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from './datas/housing.json';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Housing from './pages/Housing';
import Header from './components/Header';
import Footer from './components/Footer/';
import './styles/css/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={Data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/housing/:id" element={<Housing data={Data} />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

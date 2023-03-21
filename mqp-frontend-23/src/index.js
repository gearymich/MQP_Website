import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Methodology from './pages/Methodology';
import ModelResults from './pages/ModelResults';
import About from './pages/Tableau';
import NotFound from './pages/NotFound';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename=''>
      <Header/>
      <Routes>
        {/* Base Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ModelResults />} />
        <Route path="/methods" element={<Methodology />} />
        <Route path="/tableau" element={<About />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
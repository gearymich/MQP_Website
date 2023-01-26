import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import UserList from './pages/UserList';
import About from './pages/About';
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
        <Route path="/users" element={<UserList />} />
        <Route path="/about" element={<About />} />

        {/* Redirect */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
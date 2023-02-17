import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import {TraffickerReport, SeizureReport, AnimalPlantStatisticsReport} from './components/Reports';

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
        <Route path="/about" element={<About />}>
          <Route path="trafficker-report" element={<TraffickerReport />} />
          <Route path="seizure-report" element={<SeizureReport />} />
          <Route path="ap-statistics-report" element={<AnimalPlantStatisticsReport />} />
        </Route>
        {/* Redirect */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
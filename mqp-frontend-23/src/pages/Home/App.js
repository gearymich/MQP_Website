// import React from 'react';
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from '../../components/UserList';
import SpacyHTML from '../../components/SpacyHTML';
import Button from '@mui/material/Button';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SpacyHTML />
        <UserList />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

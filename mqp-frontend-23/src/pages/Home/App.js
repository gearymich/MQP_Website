// import React from 'react';
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from '../../components/UserList';
import Button from '@mui/material/Button';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained">Hello World</Button>
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

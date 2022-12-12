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
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
      <header className="App-header">
        <SpacyHTML />
      </header>
      </div>
      <div style={{ flex: 1 }}>
      <header className="App-header">
        <UserList />
      </header>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import UserList from './pages/UserList';
import SpacyHTML from './pages/SpacyHTML';
import NotFound from './pages/NotFound';

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({palette: {mode: mode,},});

  return ( 
  <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
        <Button variant="contained" color="primary" href="/">Home</Button>
        <Button variant="contained" color="primary" href="/users">Users</Button>
        <Button variant="contained" color="primary" href="/spacy">Spacy</Button>
        <Switch onChange={() => {setMode(mode === "light" ? "dark" : "light");}}/>
    </div>
    </ThemeProvider>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/spacy" element={<SpacyHTML />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
}

export default App;
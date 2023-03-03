import React from "react";

import { Outlet, Link } from 'react-router-dom';

import { Tabs, Tab, AppBar } from '@mui/material';

import "./Header.css";

function Header() {

  return (
  <>
    <AppBar position="static">
      <div className="header-text">WPI - Wildlife Crime MQP (2023)</div>
      <Tabs
        sx={{ fontFamily: 'Roboto'}}
        textColor="white"
        variant="fullWidth"
      >
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Model Results"  component={Link} to="/users" />
        <Tab label="Tableau Data" component={Link} to="/about" />
      </Tabs>
    </AppBar>
    <Outlet />
  </>
  );
}

export default Header;
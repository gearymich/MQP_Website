import React from "react";

import { Outlet, Link } from 'react-router-dom';

import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Typography, AppBar, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import "./Header.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Header() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangeIndex = (index) => {
      setValue(index);
  };

  return (
  <>
    <AppBar position="static">
      <div className="header-text">WPI - Wildlife Crime MQP (2023)</div>
      <Tabs
        // value={-1}
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
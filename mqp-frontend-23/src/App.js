import React, {useState} from 'react';
import './App.css';

import {Route, Routes, Outlet, Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import UserList from './pages/UserList';
import SpacyHTML from './pages/SpacyHTML';
import NotFound from './pages/NotFound';

import {Button, ButtonGroup, Switch, Tabs, Tab, CssBaseline, Box , Typography, AppBar, Card, CardActions, CardMedia, Grid, Toolbar, Container } from '@mui/material';
import { ThemeProvider, createTheme, useTheme} from '@mui/material/styles';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <AppBar position="static">
      <Typography
            variant="h4"
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center',
            }}
            gutterBottom
          >
            WPI - Wildlife Crime MQP
          </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} component={Link} to="/" />
          <Tab label="Users" {...a11yProps(1)} component={Link} to="/users" />
          <Tab label="Spacy" {...a11yProps(2)} component={Link} to="/spacy" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}/>
        <TabPanel value={value} index={1} dir={theme.direction}/>
        <TabPanel value={value} index={2} dir={theme.direction}/>
      </SwipeableViews>
      <Outlet />
      </>
  );
}

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({palette: {mode: mode,},});
  return ( 
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>

    <Routes>
      <Route element={<FullWidthTabs />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/spacy" element={<SpacyHTML />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
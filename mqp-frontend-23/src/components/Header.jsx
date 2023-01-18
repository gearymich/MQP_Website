import React from "react";

import { Outlet, Link } from 'react-router-dom';

import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Typography, AppBar, Box } from '@mui/material';
import { useTheme} from '@mui/material/styles';

import PropTypes from 'prop-types';

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
      <div className="header-text">WPI - Wildlife Crime MQP</div>
      <Tabs
        value={-1}
        sx={{ fontFamily: 'Roboto' }}
        textColor="white"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Users"  component={Link} to="/users" />
        <Tab label="Spacy" component={Link} to="/spacy" />
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

export default Header;
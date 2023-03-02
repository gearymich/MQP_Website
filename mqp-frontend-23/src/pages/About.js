import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import {TraffickerReport, SeizureReport, AnimalPlantStatisticsReport} from '../components/Reports';
import './About.css';


const About = () => {
  return (
    <>

      <main className='center'>
        {/* <nav className='button-header'>
          <Button sx={{padding: '10px'}} href="#/about/trafficker-report">Trafficker Report</Button>
          <Button sx={{padding: '10px'}} href="#/about/seizure-report">Seizure Report</Button>
          <Button sx={{padding: '10px'}} href="#/about/ap-statistics-report">Wildlife + Product Statistics Report</Button>
        </nav> */}
        <div className='data'>
        <SeizureReport />
        </div>
        <div className='data'>
        {/* <AnimalPlantStatisticsReport /> */}
        </div>        
        <div className='data'>
        {/* <TraffickerReport /> */}
        </div>
      </main>
      {/* <Outlet /> */}
    </>
    );
  }

// Export the UserList component
export default About;
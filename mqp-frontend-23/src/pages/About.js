import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import ModelTable from '../components/ModelTable';

import './Home.css';
const About = () => {

return (
    <main>
      <div className="home-header">
        <h1>Spacy HTML</h1>
        <ModelTable />
      </div>
    </main>
  );
}

// Export the UserList component
export default About;
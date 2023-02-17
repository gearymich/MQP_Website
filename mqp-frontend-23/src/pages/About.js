import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';

import TableauReport from 'tableau-react';

import './About.css';

const tableauOptions = {
  height: 800,
  width: 1000,
  hideTabs: false,
  hideToolbar: true,

  // added interval support - an integer can be passed as milliseconds in the options object and refreshDataAsync() will refresh the data automatically on your preferred interval.
  // All other vizCreate options are supported here, too
  // They are listed here: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#vizcreateoptions_record
};

const TraffickerReport = props => (
  <TableauReport
    url="https://public.tableau.com/views/TableauVisualsMQP-TraffickerStateofOrigin/TraffickerDashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
    options={tableauOptions}
  />
)

const SeizureReport = props => (
  <TableauReport
    url="https://public.tableau.com/views/TableauVisualsMQP-SeizureLocation/SeizureDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    options={tableauOptions}
  />
)

const AnimalPlantStatisticsReport = props => (
  <TableauReport
    url="https://public.tableau.com/views/TableauVisualsMQP-PlantAnimalStatistics/QuantityPriceDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    options={tableauOptions}
  />
)

const About = () => {
  return (
      <main>
        <div className="center">
          <TraffickerReport/>
        </div>
        <div className="center">
          <SeizureReport/>
        </div>
        <div className="center">
          <AnimalPlantStatisticsReport/>
        </div>
      </main>
    );
  }

// Export the UserList component
export default About;
import React from 'react';

import { Grid } from '@mui/material';

import ModelTable from '../components/ModelTable';
import LabelTable from '../components/LabelTable';

import './ModelResults.css';

const ModelResults = () => {
  return (
    <main className='table-container'>
        <div className="global-padding home-section">
        <h2> 2022 + 2023 MQP Models - F1 Scores Graphed (Full + Reduced Dataset) </h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 8, md: 12 }} className="grid-format">
          <Grid item xs={5} sm={6}>
          <img
              src="./full-dataset-results-barchart.png"
              alt= "Full Dataset Results Bargraph"
              className="elephant-img"
              />
          </Grid>
          <Grid item xs={5} sm={6}>
            <img
              src="./reduced-dataset-results-barchart.png"
              alt= "Reduced Dataset Results Bargraph"
              className="elephant-img"
              />
          </Grid>
        </Grid>
      </div>
      <h2> 2022 MQP Baselines + 2023 MQP Proposed Models (Full Data Only) </h2>
      <div>     
        <ModelTable/>
      </div>
      <h2> Single Model, Transformer Data By Label (Full Data Only) </h2>
      <div>
        <LabelTable/>
      </div>
    </main>
  );
};

export default ModelResults;
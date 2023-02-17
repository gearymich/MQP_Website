import React from 'react';

import { Grid, Typography } from '@mui/material';
import './Home.css';

const DataItem = ({ text }) => (
  <Grid item xs={8} sm={4}>
    <div className="data-text">
      <p>{text}</p>
    </div>
  </Grid>
);

function Home() {
  return (
    <main>
      {/* Home Section - Header */}
      <div className="home-header">
        <Grid container spacing={2} className="data-stats">
          <Grid item xs={8} sm={6}>
            <div className="title">
              <h1 className="title-hero">What is Wildlife Crime?</h1>
              <p>
              Wildlife Crime is the illegal trade of animals and 
              plants, which threatens the survival of many species 
              and undermines the efforts of conservationists worldwide. This project
              aims to quantify the extent of Wildlife Crime through the use of 
              Natural Language Processing (NLP) on publicly available news articles, 
              and to provide a platform to visualize this data for use by domain experts.
              </p>
            </div>
          </Grid>
          <Grid item xs={8} sm={6}>
            <img
              src="./Flamingos_Laguna_Colorada_New.jpg"
              height="100%"
              width= "100%"
              alt="Flamngos in Laguna Colorada, Bolivia"
              />
          </Grid>
        </Grid>
      </div>
      {/* Home Section - Columns */}
      <div className="story-budget-break">
        <h2 className="data-at-a-glance">Data At a Glance</h2>
        <Grid container spacing={3} className="data-stats">
          <DataItem text={"15 Labels used for Classification"} />
          <DataItem text={"XXX Unique Tokens Found"} />
          <DataItem text={"Over 300 Documents Annotated"} />
          <DataItem text={"Data sourced from over 23 News Sources"} />
          <DataItem text={"XXX Poached Species/Products Identified"} />
          <DataItem text={"Crimes Identified across XXX Countries"} />
        </Grid>
      </div>
    </main>
  );
}

export default Home;

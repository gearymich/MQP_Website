import React from 'react';

import { Grid, Typography } from '@mui/material';
import './Home.css';

const DataItem = ({ text }) => (
  <Grid item xs={3} sm={4}>
    <div className="data-text">
      <p>{text}</p>
    </div>
  </Grid>
);

function Home() {
  return (
    <main className="global-padding">
      {/* Home Section - Header */}
      <div className="home-section">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 8, md: 12 }} className="grid-format">
          <Grid item xs={5} sm={6}>
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
          <Grid item xs={5} sm={6}>
            <img
              src="./Elephas_maximus_(Bandipur).jpg"
              alt= "Indian Elephant"
              className="elephant-img"
              />
          </Grid>
        </Grid>
      </div>
      {/* Home Section - Columns */}
      <div className="data-section">
        <h2 className="data-hero">Data At a Glance</h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="grid-format">
          <DataItem text={"15 Labels used for Classification"} />
          <DataItem text={"Over 5000 Unique Tokens Extracted"} />
          <DataItem text={"Over 300 Documents Annotated"} />
          <DataItem text={"Data sourced from over 23 News Sources"} />
          <DataItem text={"XXX Poached Species/Products Identified"} />
          <DataItem text={"Crimes Identified across All 28 States and 8 Union Territories of India"} />
        </Grid>
      </div>
    </main>
  );
}

export default Home;

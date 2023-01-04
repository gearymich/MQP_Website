import React from 'react';

import { Grid } from '@mui/material';

import './Home.css';

const GridItem = ({ text }) => (
  <Grid item sm>
    <div className="border-black max-height align-text">
      <p>{text}</p>
    </div>
  </Grid>
);

function Home() {
  return (
    <main>
      {/* Home Section - Header */}
      <div className="home-header">
        <div className="box title">
          <h1 className="title-hero">What is Wildlife Crime?</h1>
          <p>
          Wildlife Crime is the illegal trade of animals and 
          plants, which threatens the survival of many species 
          and undermines the efforts of conservationists worldwide. This project
          aims to quantify the extent of Wildlife Crime through the use of Natural Language Processing (NLP)
          on publicly available news articles, and to provide a platform to visualize this data for use by domain experts.
          </p>
        </div>
        {/* Home Section - Image */}
          <img
            src="./Flamingos_Laguna_Colorada.jpg"
            width="500px"
            height="100%"
            alt="Flamngos in Laguna Colorada, Bolivia"
          />
      </div>

      <h2 className="data-at-a-glance">Data At a Glance</h2>
      
      {/* Home Section - Columns */}
      <div className="story-budget-break">
        <Grid container spacing={3} direction="row" justifyContent="space-around" alignItems="center" paddingTop={"20px"}>
          <GridItem text={"XXX Labels used for Classification"} />
          <GridItem text={"XXX Unique Tokens Found"} />
          <GridItem text={"XXX Documents Annotated"} />
          <GridItem text={"Data sourced from over XXX News Sources"} />
          <GridItem text={"XXX Poached Species/Products Identified"} />
        </Grid>
      </div>
    </main>
  );
}

export default Home;

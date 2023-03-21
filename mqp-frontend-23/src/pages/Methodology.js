import React from 'react';

import { Grid, Typography } from '@mui/material';
import './Methodology.css';

import LabelDesc from '../components/LabelDesc';


function Methodology() {
  return (
    <main>
    <div className='global-padding data-pipe-section figures'>
    <h1 className='method-hero'>Methodology</h1>
    <p>This Project builds on the previous 2022 MQP by expanding on the data collection process,
    along with implementing an entirely new NER solutions for extract wildlife information.
    Using the previous pipeline as a foundation, our solution follows the steps below to collect and 
    convey NER insights in a meaningful way:</p>
    <figure>
    <img
            src="./MQP-Visual-Pipeline-XL.png"
            alt= "Data-Pipeline"
            className="figure-img"
            style={{maxWidth: '850px'}}
            />
    <figcaption>Proposed Data Pipeline Used to Extract Relevant Wildlife Crime Information.</figcaption>
    </figure>

    </div>
      <div className=" labels-pipes-section global-padding">
        <Grid container spacing={{ xs: 4, md: 6 }} columns={{ sm: 8, md: 12 }} className="grid-format">
          <Grid item xs={5} sm={6}>
          <div className="title">
              <h2 className='method-hero'>Annotation Labels</h2>
              <p>
                With 300 Articles Scraped from online Indian News Sources, our group worked to annotate
                every article to quantify the following information:
              </p>
              <LabelDesc/>
            </div>
            </Grid>
            <Grid item xs={5} sm={6}>
            <div className='figures alt-background-color-methods'>
                <h2 className='method-hero'>Types of Pipelines Used</h2>
                <figure>
                <img
                    src="./spacy-pipeline-original.svg"
                    alt= "Spacy-Pipeline-Original"
                    className="figure-img"
                    />
                    <i style={{fontSize: 12}}>Img. Source: “Language Processing Pipelines,” spaCy. https://spacy.io/usage/processing-pipelines.</i>
                    <figcaption><b>Original Spacy Pipeline</b>. Contains Modules Not Relevant for this project's use-case (tagger, parser, etc). The Proposed 2022 Model added an Entity Ruler to label 'Species' and 'Products'.</figcaption>
                </figure>

                <figure>
                <img
                    src="./spacy-pipeline-composite.svg"
                    alt= "Spacy-Pipeline-Composite"
                    className="figure-img"
                    />  
                    <figcaption><b>Proposed Spacy Pipeline - Composite</b>. Each NER Component Annotates a unique subset of the desired labels.</figcaption>
                </figure>
                
                <figure>
                <img
                    src="./spacy-pipeline-full.svg"
                    alt= "Spacy-Pipeline-Full"
                    className="figure-img"
                    />  
                    <figcaption><b>Proposed Spacy Pipeline - Full</b>. The single NER component is responsible for annotating all desired labels.</figcaption>
                </figure>
            </div>
            </Grid>
            <Grid item xs={5} sm={6}>
            </Grid>
          </Grid>
      </div>
      </main>
  );
}

export default Methodology;

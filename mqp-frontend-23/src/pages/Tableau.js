import React from 'react';

import { SeizureBarchart, TraffickerMap} from '../components/Reports';
import './Tableau.css';


const About = () => {
  return (
    <main className='center'>
      <div className='data'>
      <SeizureBarchart />
      </div>
      
      <div className='data'>
      <TraffickerMap />
      </div>
    </main>
    );
  }

export default About;
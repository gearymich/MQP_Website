import React from 'react';

import ModelTable from '../components/ModelTable';
import LabelTable from '../components/LabelTable';

import './ModelResults.css';

const ModelResults = () => {
  return (
    <main className='table-container'>
      <h2> 2023 MQP Model Data </h2>
      <div>     
        <ModelTable/>
      </div>
      <h2> 2023 MQP Model Data (By Label) </h2>
      <div>
        <LabelTable/>
      </div>
    </main>
  );
};

export default ModelResults;
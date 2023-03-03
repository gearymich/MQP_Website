import React from 'react';

import ModelScores from "../static/model-scores.json";
import StripedDataGrid from "./StripedDataGrid.jsx"

import "./Table.css";

// Load Project Summary Data from JSON
// NOTE: Data wants an ID for some reason
const projectSummaries = []

for (let i = 0; i < ModelScores.count; i++) {
    projectSummaries.push(ModelScores.entries[i])
}

const columns = [
    { field: 'id', hide: true},
    {
        field: 'model',
        headerName: 'Model',
        minWidth: 200,
        flex: 1,
        type: 'number',
        editable: false
    },
    {
        field: 'f1-score',
        headerName: 'Mean F1-Score',
        minWidth: 50,
        flex: 1,
        type: 'number',
        editable: false
    },
    {
        field: 'standard-error',
        headerName: 'Standard Error',
        minWidth: 90,
        flex: 1,
        type: 'number',
        editable: false
    },
    {
        field: 'lb-ci',
        headerName: 'Lower Bound (95% CI)',
        minWidth: 90,
        flex: 1,
        type: 'number',
        editable: false
    },
    {
        field: 'ub-ci',
        headerName: 'Upper Bound (95% CI)',
        minWidth: 90,
        flex: 1,
        type: 'number',
        editable: false
    }
];

const ModelTable = () => {
  return (
    <div className='global-padding'>
        <StripedDataGrid 
        hideFooter
        autoHeight={true}
        rows={projectSummaries}
        columns={columns}
        density="standard"
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        />
    </div>
  );
}

export default ModelTable;
import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import ModelScores from "../static/ModelScores.json";

// Load Project Summary Data from JSON
// NOTE: Data wants an ID for some reason
const projectSummaries = []

for (let i = 0; i < ModelScores.count; i++) {
    projectSummaries.push(ModelScores.entries[i])
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'model',
        headerName: 'Model',
        width: 300,
        editable: false
    },
    {
        field: 'f1-score',
        headerName: 'Mean F1-Score',
        width: 200,
        editable: false
    },
    {
        field: 'standard-error',
        headerName: 'Standard Error',
        width: 200,
        editable: false
    },
    {
        field: 'lb-ci',
        headerName: 'Lower Bound (95% CI)',
        width: 200,
        editable: false
    },
    {
        field: 'ub-ci',
        headerName: 'Upper Bound (95% CI)',
        width: 200,
        editable: false
    }
];

const ModelTable = () => {
  return (
    <div style={{ width: '100%' }}>
    <DataGrid 
    disableSelectionOnClick 
    autoHeight={true}
    rows={projectSummaries}
    columns={columns}
    components={{Toolbar: GridToolbar}}
    />
    </div>
  );
}

export default ModelTable;
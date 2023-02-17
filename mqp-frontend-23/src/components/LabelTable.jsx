import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import LabelScores from "../static/label-scores.json";

// Load Project Summary Data from JSON
// NOTE: Data wants an ID for some reason
const labelSummaries = []

for (let i = 0; i < LabelScores.count; i++) {
    labelSummaries.push(LabelScores.entries[i])
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'label',
        headerName: 'label',
        width: 200,
        editable: false
    },
    {
        field: 'count',
        headerName: 'Label Count',
        width: 100,
        editable: false,
        type: 'number'
    },
    {
        field: 'f1-score',
        headerName: 'Mean F1-Score',
        width: 200,
        editable: false,
        type: 'number'
    },
    {
        field: 'standard-error',
        headerName: 'Standard Error',
        width: 200,
        editable: false,
        type: 'number'

    },
    {
        field: 'lb-ci',
        headerName: 'Lower Bound (95% CI)',
        width: 200,
        editable: false,
        type: 'number'
    },
    {
        field: 'ub-ci',
        headerName: 'Upper Bound (95% CI)',
        width: 200,
        editable: false,
        type: 'number'
    }
];

const LabelTable = () => {
  return (
    <div style={{ width: '100%' }}>
    <DataGrid
    disableSelectionOnClick 
    autoHeight={true}
    rows={labelSummaries}
    columns={columns}
    components={{Toolbar: GridToolbar}}
    density="compact"
    />
    </div>
  );
}

export default LabelTable;
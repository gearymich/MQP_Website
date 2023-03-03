import React from 'react';

import LabelScores from "../static/label-scores.json";
import StripedDataGrid from "./StripedDataGrid.jsx"

import "./Table.css";

// Load Project Summary Data from JSON
// NOTE: Data wants an ID for some reason
const labelSummaries = []

for (let i = 0; i < LabelScores.count; i++) {
    labelSummaries.push(LabelScores.entries[i])
}

const columns = [
    { field: 'id', hide: true},
    {
        field: 'label',
        headerName: 'label',
        minWidth: 90,
        flex: 1,
        editable: false
    },
    {
        field: 'count',
        headerName: 'Label Count',
        minWidth: 50,
        flex: 1,
        editable: false,
        type: 'number'
    },
    {
        field: 'f1-score',
        headerName: 'Mean F1-Score',
        minWidth: 90,
        flex: 1,
        editable: false,
        type: 'number'
    },
    {
        field: 'standard-error',
        headerName: 'Standard Error',
        minWidth: 90,
        flex: 1,
        editable: false,
        type: 'number'

    },
    {
        field: 'lb-ci',
        headerName: 'Lower Bound (95% CI)',
        minWidth: 90,
        flex: 1,
        editable: false,
        type: 'number'
    },
    {
        field: 'ub-ci',
        headerName: 'Upper Bound (95% CI)',
        minWidth: 90,
        flex: 1,
        editable: false,
        type: 'number'
    }
];

const LabelTable = () => {
  return (
    <div className='global-padding'>
        <StripedDataGrid
        hideFooter
        autoHeight={true}
        rows={labelSummaries}
        columns={columns}
        density="compact"
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        />
    </div>
  );
}

export default LabelTable;
import React from 'react';

import LabelScores from "../static/label-desc.json";
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
        headerName: 'Label',
        minWidth: 90,
        flex: 1,
        editable: false,
    },
    {
        field: 'desc',
        headerName: 'Description',
        minWidth: 50,
        flex: 1,
        editable: false,
        align:'center'
    },
    {
        field: 'num',
        headerName: '# Of Labels',
        minWidth: 50,
        flex: 1,
        editable: false,
        type:'number'
    }
];

const LabelDesc = () => {
  return (
    <div>
        <StripedDataGrid
        hideFooter
        autoHeight={true}
        rows={labelSummaries}
        columns={columns}
        density="standard"
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        />
    </div>
  );
}

export default LabelDesc;
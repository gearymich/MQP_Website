import React from 'react';
import TableauReact from './TableauReact.jsx';
import './Reports.css';


  function TraffickerMap() {
    return (
      <div className="reports-stats">
        <TableauReact/>
      </div>
      );
    }

  const SeizureBarchart = () => {
    return (
    <div className="reports-stats">
      <TableauReact/>
    </div>
    );
  }
  
export {TraffickerMap, SeizureBarchart};
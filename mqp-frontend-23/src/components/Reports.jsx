import React from 'react';
import TableauReport from 'tableau-react';

import './Reports.css';

const tableauOptions = {
    height: 800,
    width: 1000,
    hideTabs: false,
    hideToolbar: true,
  
    // added interval support - an integer can be passed as milliseconds in the options object and refreshDataAsync() will refresh the data automatically on your preferred interval.
    // All other vizCreate options are supported here, too
    // They are listed here: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#vizcreateoptions_record
  };

  function TraffickerMap() {
    return (
      <div className="reports-stats">
      <TableauReport
        url="https://public.tableau.com/views/trafficker/TraffickerDashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
        options={tableauOptions}
        query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes&?:render=false"
      />

      </div>
      );
    }

  const SeizureBarchart = () => {
    return (
    <div className="reports-stats">
    <TableauReport
      url="https://public.tableau.com/views/quantityprice/QuantityPriceDashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
      options={tableauOptions}
      query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes&?:render=false"
    />

    </div>
    );
  }
  
export {TraffickerMap, SeizureBarchart};
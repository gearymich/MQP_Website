import React, { Component } from 'react';
import tableau from 'tableau-api';
import './Reports.css';

class TableauReact extends Component { 
 
  componentDidMount() {  
    this.initViz();
  }  

  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/trafficker/TraffickerDashboard';
    const vizContainer = this.vizContainer;  
    const options = {
      width: this.vizContainer.offsetWidth,
      height: this.vizContainer.offsetHeight,
    };
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options); 
  }  

  render() {  
    return (  
      <div className='vizDiv' ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
}  

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
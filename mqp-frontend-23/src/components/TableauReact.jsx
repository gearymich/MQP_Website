import React, { Component } from 'react';
import * as tableau from 'tableau-api';


class TableauReact extends Component { 
 
    componentDidMount() {  
      this.initViz();
    }  
  
    initViz() {  
      const vizUrl = 'https://public.tableau.com/views/trafficker/TraffickerDashboard';
      const vizContainer = this.vizContainer;  
      const options = {
        width: vizContainer.offsetWidth,
        height: vizContainer.offsetHeight,
      };
      let viz = new tableau.Viz(vizContainer, vizUrl, options); 
    }  
  
    render() {  
      return (  
        <div className='vizDiv' ref={(div) => { this.vizContainer = div }}>  
        </div>  
      )  
    }  
  }  

export default TableauReact;

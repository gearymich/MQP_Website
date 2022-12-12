import React, { useState, useEffect } from 'react';
import axios from '../../node_modules/axios';
import qs from 'qs';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SpacyHTML = () => {
  // Use React's "useState" hook to manage the visualization HTML
  const [html, setHtml] = useState("");

  const handleResponse = response => {
    //console log the response data to see the format
    const html = response.html;
    setHtml(html);
  };


  // Define a function to handle the submission of the form
  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    axios.post("http://127.0.0.1:8000/analyze", JSON.stringify({ text: text }))
    .then(response => {
        // Handle the response
        console.log(response.data.message);
        handleResponse(response.data);
      })
      .catch(error => {
        console.log(error);
      });
};

return (
    <div className="App">
      <h2>Named Entity Visualization</h2>
      <form onSubmit={handleSubmit}>
        {/* Define a form to collect the text to analyze */}
        <label>
            <TextField
            id="text"
            label="Enter your text here"
            variant="filled"
            InputProps={{
            style: { backgroundColor: 'white', margin: '10px' },
          }}
          />
          <Button 
          type="submit" 
          variant="contained" 
          color="primary"> 
          Analyze </Button>
        </label>
      </form>
      {/* Use React's "dangerouslySetInnerHTML" property to render the HTML */}
      <div dangerouslySetInnerHTML={{ __html: html }} style={{ margin: '10px' }}/>
    </div>
  );
}

// Export the UserList component
export default SpacyHTML;
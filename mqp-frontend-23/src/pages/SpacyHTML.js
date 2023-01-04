import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Home.css';
import { margin, padding } from '@mui/system';

// TODO: Change to Wildlife Crime related text
const exampleString = "When Sebastian Thrun started working on \
self-driving cars at Google in 2007, few people outside of the \
company took him seriously. “I can tell you very senior CEOs of\
 major American car companies would shake my hand and turn away\
 because I wasn't worth talking to,” said Thrun, in an interview\
with Recode earlier this week.";

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
    <main>
      {/* Home Section - Header */}
      <div className="home-header">
        {/* Home Section - NER Submit */}
        <form className="ner-submit" onSubmit={handleSubmit}>
          {/* Define a form to collect the text to analyze */}
          <label>
            <TextField fullWidth multiline rows={8}
            label="Enter your text here"
            defaultValue= {exampleString}
            variant="outlined" name="text"
            />

            <Button type="submit" variant="contained" color="primary"> 
            Analyze 
            </Button>
          </label>
        </form>
        <div className="box title">
          {/* <h1>What is Wildlife Crime?</h1>
          <p>
          Wildlife Crime is the illegal trade of animals and 
          plants, which threatens the survival of many species 
          and undermines the efforts of conservationists worldwide. This project
          aims to quantify the extent of Wildlife Crime through the use of Natural Language Processing (NLP)
          on publicly available news articles, and to provide a platform to visualize this data for use by domain experts.
          </p> */}
        </div>
      </div>

      {/* Use React's "dangerouslySetInnerHTML" property to render the HTML */}
      <div className="chat-gpt-info"></div>
      <div className="spacy-output border-black" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

// Export the UserList component
export default SpacyHTML;
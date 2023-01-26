import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';

import './Home.css';
import { margin, padding } from '@mui/system';

// TODO: Change to Wildlife Crime related text
const defaultText = "When Sebastian Thrun started working on \
self-driving cars at Google in 2007, few people outside of the \
company took him seriously. “I can tell you very senior CEOs of\
 major American car companies would shake my hand and turn away\
 because I wasn't worth talking to,” said Thrun, in an interview\
with Recode earlier this week.";

const About = () => {
  // Use React's "useState" hook to manage the visualization HTML
  const [html, setHtml] = useState("");

  const formSubmit = event => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    axios.post("http://127.0.0.1:8000/analyze", JSON.stringify({ text: text }))
    .then(response => { 
      const html = response;
      setHtml(html.data.html);
    })
    .catch(error => {
      console.log(error);
    });
  };

return (
    <main>
      <div className="home-header">
        <h1>Spacy HTML</h1>
        <FormControl sx={{width: '500px'}}>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Model"
            // onChange={handleChange}
          >
            <MenuItem value={10}>en_core_web_sm</MenuItem>
            <MenuItem value={20}>en_core_web_md</MenuItem>
            <MenuItem value={30}>en_core_web_lg</MenuItem>
            <MenuItem value={40}>en_core_web_trf</MenuItem>
          </Select>
        </FormControl>
        <form className="ner-submit" onSubmit={formSubmit}>
          <label>
            <TextField fullWidth multiline rows={8}
            label="Enter your text here"
            defaultValue= {defaultText}
            variant="outlined" name="text"
            />

            <Button type="submit" variant="contained" color="primary"> 
            Analyze 
            </Button>
          </label>
        </form>
      </div>

      {/* Use React's "dangerouslySetInnerHTML" property to render the HTML */}
      <div className="spacy-output border-black" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

// Export the UserList component
export default About;
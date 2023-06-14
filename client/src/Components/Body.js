import React, { useState} from 'react';
import Inputbox from './Inputbox';
import Outputbox from './Outputbox';
import './css/Body.css';

import axios from 'axios';

export default function Body() {
  const [SummaryText, setSummaryText] = useState('');
  const generateSummary = async (originalText, summarySize) => {
    try {
      const response = await axios.post('http://localhost:5000/summarize', {
        inputText: originalText,
        summarySize: summarySize,
      });
      if (response.data.length == 0) {
        response.data = 'Please check the input'
      }
      setSummaryText(response.data);
    } catch (error) {
      setSummaryText(error);
    }
  };
  return (
    <div className='Body'>
      <Inputbox generateSummary = {generateSummary}/>
      <Outputbox SummaryText={SummaryText}/>
    </div>
  );
}

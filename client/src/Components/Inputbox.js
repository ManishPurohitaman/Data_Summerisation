import React, { useState } from 'react';
import TextBox from './Textbox.js';
import Submission from './Submission.js';
import './css/Inputbox.css';

export default function Inputbox(props) {
  const [inputText, setInputText] = useState('');
  const [scaleValue, setScaleValue] = useState(50);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleScaleChange = (event) => {
    setScaleValue(parseInt(event.target.value));
  };

  const handleSummarize = () => {
    if ( inputText.length == 0) {
      alert("Enter a paragraph to summerize")
    }
    props.generateSummary(inputText,scaleValue)
  };

  const handleClear = () => {
    setInputText('');
    setScaleValue(50);
  };

  return (
    <div className='inputbox'>  
      <textarea
        value={inputText}
        onChange={handleInputChange}
        className="textbox"
        style={{ textAlign: 'left' }}
      ></textarea>
      <div>
        <input type="range" min="1" max="100" value={scaleValue} onChange={handleScaleChange} />
        <br />
        <button onClick={handleSummarize} className='summarize'>Summarize</button>
        <button onClick={handleClear} className='clear'>Clear</button>
      </div>
    </div>
  );
}

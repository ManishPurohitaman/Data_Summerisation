import React, { useState } from 'react';
import TextBox from './Textbox.js';
import Submission from './Submission.js';
import './css/Inputbox.css';

export default function Inputbox(props) {
  const [inputText, setInputText] = useState('');
  const clearTextHandler = () => {
    setInputText('');
  };

  return (
    <div className='inputbox'>
      <textarea
      value={inputText}
      onChange={handleInputChange}
      className="textbox"
      style={{ textAlign: 'left' }}
    ></textarea> 
      <Submission originalText={inputText} clearTextHandler={clearTextHandler} generateSummary={props.generateSummary}/>
    </div>
  );
}

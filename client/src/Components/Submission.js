import React, { useState } from 'react';
import './css/submission.css'
const MyComponent = (props) => {
  const [scaleValue, setScaleValue] = useState(50);
  const [originalText, setOriginalText] = useState('');

  const handleSummarize = () => {
    setOriginalText(props.originalText)
    if (originalText=== '') {
      alert("Please Enter a Paragraph to summerize");
    }
    else {
      props.generateSummary(originalText,scaleValue)
    }
  };

  const handleClear = () => {
    setScaleValue(50);
    setOriginalText('');
    props.clearTextHandler()
  };

  const handleScaleChange = (event) => {
    setScaleValue(parseInt(event.target.value));
  };

  return (
    <div>
      <input type="range" min="1" max="100" value={scaleValue} onChange={handleScaleChange} />
      <br />
      <button onClick={handleSummarize} className='summarize'>Summarize</button>
      <button onClick={handleClear} className='clear'>Clear</button>
    </div>
  );
};

export default MyComponent;
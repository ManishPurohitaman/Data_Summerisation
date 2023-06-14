import React, { useState, useEffect } from 'react';
import './css/TextBox.css';

const TextBox = (props) => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (props.clearTextBoxFlag) {
      setInputText('');
    }
  }, [props.clearTextBoxFlag]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    props.inputTextCatcher(inputText);
  };

  return (
    <textarea
      value={inputText}
      onChange={handleInputChange}
      className="textbox"
      style={{ textAlign: 'left' }}
    ></textarea>
  );
};

export default TextBox;

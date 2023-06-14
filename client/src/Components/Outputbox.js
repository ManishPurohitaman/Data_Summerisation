import React from 'react';
import './css/Outputbox.css';

const Outputbox = ({ SummaryText }) => {
  return (
    <div className='outputbox'>
      <textarea
        value={SummaryText}
        className='textbox'
        style={{ textAlign: 'left' }}
      ></textarea>
    </div>
  );
};

export default Outputbox;

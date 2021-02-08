import Button from './Button';
// import React, { useState } from 'react';

const InputSection = (props) => {
  return (
    <div>
      <textarea
        rows='20'
        cols='50'
        value={props.data}
        onChange={props.handleChange}
      />
      <Button name='Submit' />
    </div>
  );
};

export default InputSection;

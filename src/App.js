import './App.css';
// import Button from './components/Button'
import InputSection from './components/InputSection';
import VisualFileStructure from './components/VisualFileStructure';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div className='App'>
      <InputSection data={data} handleChange={handleChange} />
      <VisualFileStructure data={data} />
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

function App() {
  const [number, setNumber] = useState(0);

  const updateNumber = (data) => {
    setNumber(data);
  };

  return (
    <div className="App">
      <h1>App</h1>
      <AddNumberRoot number={number} setData={updateNumber} />
      <DisplayNumberRoot number={number} />
    </div>
  );
}

export default App;

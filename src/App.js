import React from 'react';
import './App.css';
import { SelectSource } from './Components/SelectSource/';
import { Scorecard } from './Scorecard';

function App() {
  return (
    <div className="App">
      <SelectSource />
      <Scorecard />
    </div>
  );
}

export default App;

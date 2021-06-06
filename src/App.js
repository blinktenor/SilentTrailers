import React from 'react';
import './App.css';
import { SelectSource } from './Components/SelectSource/';
import { Scorecard } from './Scorecard';

function App() {
  return (
    <div className="App">
      <Scorecard />
      <SelectSource />
    </div>
  );
}

export default App;

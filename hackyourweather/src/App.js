import React from 'react';
import './App.css';
import  {Weather}  from "./Components/weather";

function App() {
  return (
    <div className="App">
      <h1 className="weatherTitle">Weather</h1>
      <Weather />

    </div>
  );
}

export default App;

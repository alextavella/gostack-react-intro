import React from 'react';

import './App.css';
import react from './assets/react.png';

import TechList from './components/TechList';

function App() {
  return (
    <div>
      <img src={react} width="320" height="240"></img>
      <h1>Hello Rocketseat</h1>
      <TechList />
    </div>
  );
}

export default App;
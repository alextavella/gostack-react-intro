import React from 'react';

import './App.css';
import react from './assets/react.png';

import TechList from './components/TechList';

function App() {
  return (
    <div className="main">
      <header>
        <img src={react} width="320" height="240"></img>
      </header>
      <TechList />
    </div>
  );
}

export default App;
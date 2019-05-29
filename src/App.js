import React from 'react';
import './App.css';
import Input from './components/Input';
import Lipsync from './components/Lipsync';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__text">Sashay or Shantay?</h1>
      </header>
      <Input />
      <Lipsync />
    </div>
  );
}

export default App;

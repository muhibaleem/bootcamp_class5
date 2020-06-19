import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js'
import CounterContext from './CounterContext.js';

function App() {

  let countState = useState(1) //[count, setCount]

  return (

    <CounterContext.Provider value={countState}>
    <div className="App">
      
      <h1>Hello from Muhib Aleem- Assignment# 5</h1>

      <br />
      <br />
      <hr />

      <Parent />

    </div>
    </CounterContext.Provider>

  );
}

export default App;

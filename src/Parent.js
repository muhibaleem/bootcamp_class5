import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Child from './Child.js'
import SecondChild from './SecondChild.js'

function Parent() {
  return (
    <div className="App">
      

        <Child/>

        <br />
        <hr />
        
        <SecondChild />

    </div>
  );
}

export default Parent;

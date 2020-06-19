import React, {useContext} from 'react';
// import logo from './logo.svg';
import './App.css';
import counterContext from './CounterContext';


const Child = () => {

    let counterValue = useContext(counterContext);

  return (
    <div className="App">
      
      <h3>This is example of Counter Context</h3>
      <h2>Value of context state is {counterValue[0]}</h2>

        
        
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increment Context
            </button>

            <button onClick={()=> {counterValue[1](--counterValue[0])}}>
                Decrement Context
            </button>

    </div>
  );
}

export default Child;

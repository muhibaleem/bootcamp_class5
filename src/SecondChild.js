import React, {useReducer} from 'react';
import counterReducer from './CounterReducer.js';

const SecondChild = () => {

    let [state , dispatch ] = useReducer(counterReducer , 1);

    return(

        <div>
            <h3>This is example of Counter Reducer</h3>

            <h2>Value of reducer state is {state}</h2>

            <button onClick={() => dispatch('INCREMENT')}>Increment Reducer</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement Reducer</button>

        </div>
    )
}
export default SecondChild;
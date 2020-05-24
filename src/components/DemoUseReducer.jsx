import React, { useReducer } from "react";
import AgeReducer from '../reducers/AgeReducer';

let state = { name : "Mridul", age : 27 };

export const DemoUseReducer = () => {
    const [{ name, age }, dispatch] = useReducer(AgeReducer, state);
    
    return(
        <>
            <h2>How to use UseReducer Hook.</h2>
            <p>{name}</p>
            <h3>{age}</h3>
            <button 
                onClick={() => dispatch({ type: "INCREMENT"})}
                className="ui primary basic button">
                 INCREMENT
            </button>
            &nbsp;
            <button 
                className="ui primary basic button"
                onClick={() => dispatch({ type: "DECREMENT"})}>
                    DECREMENT
            </button>

        </>
    )
}

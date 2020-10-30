import React, { useReducer } from "react";
import AgeReducer from '../reducers/AgeReducer';

let state = { name : "Mridul", age: 20, shouldChange: true };

export const DemoUseReducer = () => {
    const [{ name, age, shouldChange }, dispatch] = useReducer(AgeReducer, state);
    
    return(
        <>
            <h2>How to use UseReducer Hook.</h2>
            { shouldChange === true ? <p>{name}</p> : "Mridul" }
            <h3>{age}</h3>
            <button className="ui primary basic button" onClick={() => dispatch({ type: "CHANGE-NAME"})}> CHANGE NAME </button>
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

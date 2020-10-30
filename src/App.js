import React , { useState } from "react";
import { useForm } from './components/useForm';
import HelloComponent from "./components/Hello";
import { useFetch } from "./components/useFetch";
import { DemoUseReducer } from "./components/DemoUseReducer";

// we cn use it in useState as default value
// let expensiveInitialState = () => 43 ; 

const App = () => {
    // const [val , setVal] =  useState(() => expensiveInitialState())
    const [{ count, count2 }, setCount] = useState({count: 0, count2: 10 });
    const [values, handleChange] = useForm({email: "", password: ""}) ; 
    const [show, setShow] = useState(true) ; 
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`) ;
    // http://numbersapi.com/43/trivia 

    // useEffect for mousemove ....
    // useEffect(() => {
    //     // console.log("Rendering");
    //     const onMouseMove = e => {
    //         console.log(e);
    //     }
    //     window.addEventListener('mousemove', onMouseMove)

    //     return () => {
    //             window.removeEventListener('mousemove', onMouseMove) ;
    //         }
    // }, []);

    //can have multiple useEffect in one file....
    // useEffect(() => {
    //     console.log("useEffect one!");
    // });

    return(
        <div>
            <h1>AppComponent!</h1>
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <button 
                className="ui button primary"
                onClick={
                    () => setCount(currentCount => ({ count2: ++currentCount.count2 , count: ++currentCount.count }))}>
                        Increment
            </button>

            <hr />
            <form className="ui form">
                <label htmlFor="email"> 
                    <p>{values.email}</p>
                    <input 
                        type="email" 
                        name="email"
                        onChange={handleChange} 
                        placeholder="Email"
                    />
                </label>
                <label htmlFor="password">
                    <p>{values.password}</p>    
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </label>
                <br/>
                <br/>

                <button className="ui button primary"> Submit </button>
            </form>
            
            <hr/>

           { show &&  <HelloComponent /> }
            <button onClick={() => setShow(!show)}>Toggle HelloComponent</button>    
            <hr/>
            <br/>

            {loading ? 
                <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading...</div>
                    </div>
                    <p></p>
                </div> 
                : 
                data }
                <hr />
                <div>
                    <DemoUseReducer />
                </div>
                
        </div>
    )
}
 
export default App ; 

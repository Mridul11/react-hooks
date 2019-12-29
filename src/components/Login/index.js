import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Button } from 'semantic-ui-react' ; 

function LoginPage(){
    return(
        <div>
            <LoginComponent />
        </div>
    )
}

const LoginComponent = () => {
    const [ email, setEmail ] = useState("");
    const [password, setPassword] = useState("") ; 

    const [ val, setVal ] = useState([]) ;

    useEffect( () => {
        const callingApi = async () => {
            const result = await axios('http://hn.algolia.com/api/v1/search?query=redux');
            setVal(result.data.hits)} 
            callingApi()
      }, []);
    

    return(
        <div className="ui form">
            <label>Eamil: </label>
            <input 
                name="email"
                className="form-control" 
                value = {email} 
                onChange={e => setEmail(e.target.value)}
            />

            <label>Password: </label>

            <input name="passwd" 
                className="form-control" 
                value={ password }
                onChange={e => setPassword(e.target.value)}
            />
            <Button >submit</Button>

        <hr />

            {
               val ? val.map(item => (
                    <li key={item.objectID}>
                    <span>{item.objectID} : </span>
                    <a href={item.url}>{item.title}</a>
                    </li>
                )) : <div>Loading ...</div>
            }
        </div>
    )
}

export { LoginPage, LoginComponent } ;

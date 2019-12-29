import React ,{ useState }from 'react';
import {Button } from 'semantic-ui-react' ;

const RegisterPage = () => {
    return(
        <div>
            <RegisterComponent />
        </div>
    )
}

function RegisterComponent(){
    const [Email, setEmail] = useState("") ;
    const [Password, setPassword] = useState("") ; 

    return(
        <div className="ui form">
            <label>Email : </label>
            <input 
                type="email"
                name="email" 
                className="form-control" 
                onChange={(e) => setEmail(e.target.value) } 
            />
            <br/>
            <label>Password: </label>
            <input name="passwd" 
                type="password"    
                className="form-control" 
                onChange={ (e) => setPassword(e.target.value) }
            />
            <br />
            <Button type="submit" className="btn btn-primary">Submit</Button>
            <br /> 
        
           <h4> { Email  +  Password } </h4>
        </div>
    )
}

export { RegisterPage, RegisterComponent } ;

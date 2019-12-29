import React from 'react';
import { RegisterPage } from './components/Register'; 
import { LoginPage } from './components/Login';

function App() {
  return (
        <div className="App ui container">
          <h1>Welcome to React Application !</h1>
            <RegisterPage />
         
          <hr />
          
          <div>
            <h1>Login Page:</h1>
            <LoginPage />
          </div>
        
        </div>
  );
}

export default App;




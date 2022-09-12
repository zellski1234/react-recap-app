import React from 'react';
import { useState } from "react";
import { login } from '../utils';

function Login({setter}) {
    // const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    async function submitHandler (e) {
        e.preventDefault();
        await login(email, password, setter);

    };


  return (
    <div>
        <form onSubmit={submitHandler}>
            {/* <label> name:
                <input onChange={(e) => setName(e.target.value)}/>
            </label>
            <br></br> */}

            <label> Email:
                <input onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <br></br>

            <label> Password:
                <input onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <br></br>

            <button type="submit">Click here to login</button>
            

        </form>
    </div>
  )
};

export default Login;

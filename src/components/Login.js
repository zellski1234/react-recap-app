import React from 'react';
import { useState } from "react";
import { login } from '../utils';
import styled from 'styled-components';

function Login({setter}) {
    // const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    async function submitHandler (e) {
        e.preventDefault();
        await login(email, password, setter);

    };


  return (
    <GreatDiv>
        <form onSubmit={submitHandler}>
            <div>
                <label> Email:
                    <input onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br></br>
            </div>

            <div>
                <label> Password:
                    <input onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br></br>
            </div>

            <button type="submit">Click here to login</button>
            

        </form>
    </GreatDiv>
  )
};

export default Login;

const GreatDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
    form {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    label {
        display: flex;
        align-items: flex-start;
        border: 1px solid beige;
        flex-direction: column;
    }
    input {
        text-align: center;
    }
    
`
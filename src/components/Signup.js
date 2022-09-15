import React from 'react';
import { useState } from "react";
import { signup } from '../utils';
import styled from 'styled-components';

function Signup({setter, setToken, setLoggedIn, setClicked, setStatus}) {
    // const [name, setName] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    async function submitHandler (e) {
        e.preventDefault();
        let token = await signup(name, email, password, setter, setLoggedIn, setClicked, setStatus);
        setToken(token)
    };


  return (
    <GreatDiv>
        <form onSubmit={submitHandler}>
            <div>
                <label> Name:
                    <input onChange={(e) => setName(e.target.value)}/>
                </label>
                <br></br>
            </div>
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

            <button type="submit">Click here to signup</button>
            

        </form>
    </GreatDiv>
  )
};

export default Signup;

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
        flex-direction: column;
    }
    input {
        text-align: center;
    }
    
`
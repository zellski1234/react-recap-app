import React from 'react'
import { useState } from "react";
import { updateName, updateEmail, updatePassword } from '../utils';
import styled from 'styled-components';

function Update({token, setUser}) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function submitHandlerName (e) {
        e.preventDefault();
        await setUser(name)
        await updateName(token, name)
    };
    async function submitHandlerEmail (e) {
        e.preventDefault();
        await updateEmail(token, email)
    };
    async function submitHandlerPassword (e) {
        e.preventDefault();
        await updatePassword(token, password)
    };

  return (
    <MainDiv>
        <GreatDiv>
            <form onSubmit={submitHandlerName}>
                <div>
                    <label> New Name:
                        <input onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <br></br>
                </div>

                <button type="submit" >click here to change name</button>

            </form>
        </GreatDiv>
        <GreatDiv>
                <form onSubmit={submitHandlerEmail}>
                <div>
                    <label> New Email:
                        <input onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <br></br>
                </div>

                <button type="submit" >click here to change Email</button>

            </form>
        </GreatDiv>
        <GreatDiv>
                <form onSubmit={submitHandlerPassword}>
                <div>
                    <label> New Password:
                        <input type="password" id="pass" name="password" minlength="8" require onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <br></br>
                </div>

                <button type="submit" >click here to change Password</button>

            </form>
        </GreatDiv>
    </MainDiv>
    
  )
}

export default Update

const GreatDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
    margin: 10px 20px;
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
const MainDiv = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-align: center;
    margin-top: 5px;    
`
import React from 'react'
import { useState } from "react";
import { update, listUser } from '../utils';
import styled from 'styled-components';

function UpdateFunc() {

    const [token, setToken] = useState();
    const [name, setName] = useState();

    async function submitHandler (e) {
        e.preventDefault();
        await update(token, name)
        listUser()
    };

  return (
    <GreatDiv>
         <form onSubmit={submitHandler}>
            <div>
                <label> Token:
                    <input onChange={(e) => setToken(e.target.value)}/>
                </label>
                <br></br>
            </div>
            <div>
                <label> New Name:
                    <input onChange={(e) => setName(e.target.value)}/>
                </label>
                <br></br>
            </div>

            <button type="submit">click here to change name</button>

        </form>
    </GreatDiv>
  )
}

export default UpdateFunc

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
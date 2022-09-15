import React from 'react'
import { useState } from "react";
import styled from 'styled-components';
import { deleteUser } from '../utils';

function DeleteUsers({token, setLoggedIn, setClicked}) {
    const [confirm, setConfirm] = useState(false);
    const [msg, setMsg] = useState();


    async function submitHandlerName (e) {
        e.preventDefault();
        if(confirm){
            setMsg(``)
            await deleteUser(token, setLoggedIn, setClicked)
        }
        else {
            setMsg(`Please Type "DELETE" to confirm delete!`)
        }
    };

    async function confirmCheck(e) {
        if(e === "DELETE"){
            setConfirm(true)
            setMsg(``)
        }
        else{
            setMsg(`Please Type "DELETE" to confirm delete!`)
        }
        console.log(e)
    }

  return (
    <GreatDiv>
        <form onSubmit={submitHandlerName}>
            <div>
                <label> Type DELETE to confirm:
                    <input 
                    placeholder='DELETE'
                    onChange={(e) => confirmCheck(e.target.value)}/>
                </label>
                <br></br>
                <h3>{msg}</h3>
            </div>
            <button id="deleteBtn"type="submit" >Delete Account</button>

        </form>
    </GreatDiv>
  )
}

export default DeleteUsers

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
    div {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    button{
        background-color: black;
    }
`
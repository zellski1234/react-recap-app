import React from 'react'
import { useState, useEffect } from "react";
import { listUser } from '../utils';

function ListUser({setter, clicked, setClicked}) {
    const [usernames, setUsernames] = useState()
    // const [clicked, setClicked] = useState(false)
    const [show, setShow] = useState(false);

    const loadUsernames = async () => {
        let users = await listUser()
        setUsernames(users)
    }

    useEffect (() =>{
        loadUsernames()
    },)

    return (
        <div className='usernames'>
            <button onClick={()=> {setClicked(!clicked);  setShow(!show) }}>{!clicked ? "List Users Names" : "Hide User Names"} </button>
            <div className='showlist'>
                        <div className={show ? "showContain" : "hideContain"}>
                            {usernames.map((user, index) => (
                                <p key={index}>{`User ${index+1}: ${user}`}</p>
                            ))}
                        </div>
            </div>
        </div>
    )
}

export default ListUser;


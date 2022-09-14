import React from 'react'
import { useState, useEffect } from "react";
import { listUser } from '../utils';

function ListUser({setter, clicked, setClicked}) {
    const [usernames, setUsernames] = useState()
    // const [clicked, setClicked] = useState(false)

    const loadUsernames = async () => {
        let users = await listUser()
        setUsernames(users)
    }

    useEffect (() =>{
        loadUsernames()
    },)

    return (
        <div className='usernames'>

            <button onClick={()=> setClicked(!clicked)}> List Users Names </button>
            { clicked
                ?(
                    <div className="contain">
                    {usernames.map((user, index) => (
                        <p key={index}>{`${user}`}</p>
                    ))}
                    </div>
                ) : (
                    <div className="empty">
                        {/* <h2>No users found</h2> */}
                    </div>
                )
            }
        </div>
    )
}

export default ListUser;
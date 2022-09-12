import React from 'react'
import { useState } from "react";

function Login({setter}) {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
  return (
    <div>
        <form>
            <label> Username
                <input onChange={(e) => setUsername(e.target.value)}/>
                <br></br>
            </label>
            <label> Email
                <input onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
            </label>
            <label> Password
                <input onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
            </label>

        </form>
    </div>
  )
}

export default Login

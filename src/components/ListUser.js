import React from 'react'
import { useState } from "react";
import { listUser } from '../utils';


function ListUser() {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [list, setList] = useState([]);
   
//    async function submitHandler (e) {
//        e.preventDefault();
//        await listUser(setter);

//    };

   const listUser = async () => {
    try {
        const response = await fetch("http://localhost:5000/user/", {
            method:"GET",
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json()
        console.log(data)
        setList(data)

    } catch (error) {
        console.error(error)
    }

}


 return (
   <div>
        <button onClick={()=>listUser()}>List Users</button>
        {list}
   </div>
 )
}

export default ListUser;
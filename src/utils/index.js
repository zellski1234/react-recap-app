export const login = async ( email, password, setter, setLoggedIn, setClicked, setStatus) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_USER}user/login`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        // console.log(data.token)
        setter(data.user)
        if(data.user){
            setLoggedIn(true)
            setClicked(false)
            console.log("logged In AS")
            console.log(`Name: ${data.user}`)
        }
        else {
            setLoggedIn(false)
            setClicked(false)
            setStatus(`The email:${email} or password:${password} cannot be found`)
            console.log(`The email:${email} or password:${password} cannot be found`)
        }
        return data.token

    } catch (error) {
        console.error(error)
    }
}

export const signup = async ( name, email, password, setter, setLoggedIn, setClicked, setStatus) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_USER}user/signup`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name":name,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        // console.log(data.token)
        console.log(`Account: ${data.user}`)
        if(data.user){
            setLoggedIn(true)   
            setClicked(false)
            setter(data.user)
        } else {
            setLoggedIn(false)
            setClicked(false)
            setStatus(`Account Already exists!`)
            console.log(`Account Already exists!`)
        }
     
        return data.token

    } catch (error) {
        console.error(error)
    }
}

export const listUser = async ( setter ) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_USER}user/`, {
            method:"GET",
            headers: {"Content-Type": "application/json"}
        })
        
        const data = await response.json()
        const userData = data.map(users => users.name)
        return userData 

    } catch (error) {
        console.error(error)
    }

}

export const updateName = async ( token, name ) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_USER}user/editname/`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({
                "name": name
            })
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}

export const updateEmail = async ( token, email ) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_USER}user/editemail/`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({
                "email": email
            })
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}

export const deleteUser = async ( token, setLoggedIn, setClicked ) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_USER}user/`, {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        })
        const data = await response.json()
        console.log(data)
        console.log("account delete")
        setClicked(false)
        setLoggedIn(false)

    } catch (error) {
        console.error(error)
    }

}




// export const displayUsers = async (setter) => {
//     try {
//         const response = await fetch("http://localhost:5001/displayUsers", {
//             method: "GET",
//             headers: {"Content-Type": "application/json"}
//         });
//         const data = await response.json()
//         const usernames = data.users.map(users => users.username)
//         console.log(usernames)
//         return usernames
//     } catch (error)  {
//         console.log(error)
//     }
// }

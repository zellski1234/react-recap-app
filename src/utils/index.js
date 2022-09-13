export const login = async ( email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user/login", {
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
        console.log(data.token)
        console.log(data.user)
        setter(data.user)
        return data.token

    } catch (error) {
        console.error(error)
    }

}

export const listUser = async ( setter ) => {
    try {
        const response = await fetch("http://localhost:5000/user/", {
            method:"GET",
            headers: {"Content-Type": "application/json"}
        })
        
        const data = await response.json()
        const userData = data.map(users => users.name)
        console.log(userData)
        return userData 

    } catch (error) {
        console.error(error)
    }

}

export const update = async ( token, name ) => {
    try {
        const response = await fetch("http://localhost:5000/user/editname/", {
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

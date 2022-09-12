export const login = async ( email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user/login", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data.user)
        setter(data.user)

    } catch (error) {
        console.error(error)
    }

}

// export const listUser = async ( setter ) => {
//     try {
//         const response = await fetch("http://localhost:5000/user/", {
//             method:"GET",
//             headers: {"Content-Type": "application/json"}
//         })
//         const data = await response.json()
//         console.log(data)
//         setter(data)

//     } catch (error) {
//         console.error(error)
//     }

// }



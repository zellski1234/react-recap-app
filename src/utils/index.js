export const login = async (name, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user/login", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.name)

    } catch (error) {
        console.error(error)
    }

}



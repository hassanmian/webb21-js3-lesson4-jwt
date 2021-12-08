import React, {useState} from 'react'

export default function UserCreatePage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function handleOnSubmit(e){
        e.preventDefault()
        
        const payload = {
            email,
            password,
            firstName,
            lastName
        }
        const url = "https://lab.willandskill.eu/api/v1/auth/users/"
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function renderInput(type, placeholder, value, setValue) {
        return <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    }
    return (
        <div>
            <h1>Create a new User</h1>
            <form onSubmit={handleOnSubmit}>
                {renderInput("text", "Email", email, setEmail)}
                {renderInput("password", "Password", password, setPassword)}
                {renderInput("text", "First Name", firstName, setFirstName)}
                {renderInput("text", "Last Name", lastName, setLastName)}
               
                <button type="submit">Create User</button>
            </form>
        </div>
    )
}

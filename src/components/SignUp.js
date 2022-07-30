import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp({ user, setUser }) {
    const [newUser, setNewUser] = useState(user)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:4000/user", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(_ => setUser(newUser))
        
        navigate("/map")
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="add-form">
                <h2>Join Scratch Match</h2>

                <div>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        onChange={e => setNewUser({...newUser, firstName: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        onChange={e => setNewUser({...newUser, lastName: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label>Gender</label>
                    <select
                        onChange={e => setNewUser({...newUser, gender: e.target.value})}
                        style={{ width: "240px" }}
                        required
                    >
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                    </select>
                </div>

                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
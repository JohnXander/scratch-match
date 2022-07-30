import { useNavigate } from "react-router-dom"

import male from "../img/male.jpg"
import female from "../img/female.jpg"

export default function Profile({ user, setUser, countries }) {
    const noUser = {firstName: "", lastName: "", gender: "male"}
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()

        fetch("http://localhost:4000/user", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noUser)
        })
            .then(_ => setUser(noUser))
        
        navigate("/")
    }

    return (
        <div className="form-container">
            <div className="add-form">
                <img
                    style={{borderRadius: "50%"}}
                    src={user.gender === "male" ? male : female}
                    alt="Profile Pic"
                />

                <div>
                    <label>First Name</label>
                    <input
                        style={{backgroundColor: "white"}}
                        type="text"
                        value={user.firstName}
                        disabled
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input
                        style={{backgroundColor: "white"}}
                        type="text"
                        value={user.lastName}
                        disabled
                    />
                </div>

                <div>
                    <label>Countries Visited</label>
                    <input
                        style={{backgroundColor: "white", width: "160px"}}
                        type="text"
                        value={countries.length}
                        disabled
                    />
                </div>

                <div>
                    <button onClick={handleClick}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}
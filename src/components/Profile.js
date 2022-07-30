import { useNavigate } from "react-router-dom"

export default function Profile({ user, setUser, countries }) {
    const noUser = {firstName: "", lastName: ""}
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
                <h2>Profile</h2>

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
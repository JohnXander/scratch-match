import { useNavigate } from "react-router-dom"

import male from "../img/male.jpg"
import female from "../img/female.jpg"

export default function Profile({ user, setUser, countries, friends }) {
    const noUser = {firstName: "", lastName: "", gender: "male"}
    const navigate = useNavigate()

    if (countries.length > 0) countries.sort((a, b) => a.year - b.year)

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

                {countries.length > 0 && <div>
                    <label>Travel Trail</label>
                    <select
                        style={{ width: "210px" }}>
                        <option>{countries[0].year} - Present</option>
                        {countries.map((country, i) => {
                            const { name, year } = country
                            return (
                                <option key={i} value={name} disabled>
                                    {i + 1}. {name}, {year}
                                </option>
                            )
                        })}
                    </select>
                </div>}

                <div>
                    <label>Friends</label>
                    <input
                        style={{backgroundColor: "white", width: "240px"}}
                        type="text"
                        value={friends.length}
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
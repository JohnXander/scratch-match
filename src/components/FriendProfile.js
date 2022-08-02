import { useLocation } from "react-router-dom"

import male from "../img/male.jpg"
import female from "../img/female.jpg"

export default function FriendProfile() {
    const location = useLocation()
    const { firstName, lastName, gender, visited, trail } = location.state
    return (
        <div className="form-container">
            <div className="add-form">
                <img
                    style={{borderRadius: "50%"}}
                    src={gender === "male" ? male : female}
                    alt="Profile Pic"
                />

                <div>
                    <label>First Name</label>
                    <input
                        style={{backgroundColor: "white"}}
                        type="text"
                        value={firstName}
                        disabled
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input
                        style={{backgroundColor: "white"}}
                        type="text"
                        value={lastName}
                        disabled
                    />
                </div>

                <div>
                    <label>Countries Visited</label>
                    <input
                        style={{backgroundColor: "white", width: "160px"}}
                        type="text"
                        value={visited}
                        disabled
                    />
                </div>

                {/* {trail.length > 0 && <div>
                    <label>Travel Trail</label>
                    <select
                        style={{ width: "210px" }}>
                        <option>{trail[0].year} - Present</option>
                        {trail.map((country, i) => {
                            const { name, year } = country
                            return (
                                <option key={i} value={name} disabled>
                                    {i + 1}. {name}, {year}
                                </option>
                            )
                        })}
                    </select>
                </div>} */}

                <div>
                    <button>Add Friend</button>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import male from "../img/male.jpg"
import female from "../img/female.jpg"

export default function SuggestedFriends({ people }) {
    // const { countries, setCountries, world, setNotification } = props
    // const initialVal = { name: world[0].name, year: world[0].year}
    const [newFriend, setNewFriend] = useState()
    const navigate = useNavigate()

    const handleClick = (name) => {

        console.log("Heeeey", name)

        // const { name, year } = newPin
        // const alreadyExists = countries.find(x => x.name === name)

        // if (alreadyExists !== undefined) {
        //     setNotification(name, "already added")
        // } else {
        //     const selected = world.find(x => x.name === name)
        //     selected.year = year
        //     const updatedCountries = [...countries, selected]

        //     fetch("http://localhost:4000/countries", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(selected)
        //     })
        //         .then(_ => {
        //             setNotification(name, "added")
        //             setCountries(updatedCountries)
        //         })
            
        //     navigate("/map")
        // }

    }

    return (
        <ul>
            {people.map((person, i) => {
                const { id, firstName, lastName, gender, visited } = person
                return <li key={i} className="listed-friend">
                    <div>
                        <img
                            style={{
                                width: "40px",
                                borderRadius: "50%"
                            }}
                            src={gender === "male" ? male : female}
                            alt="Profile Pic"
                        />
                        <Link
                            className="friend-link"
                            to={`/friends/${firstName.toLowerCase()}.${lastName.toLowerCase()}`}
                            state={person}
                        >
                            {firstName} {lastName}
                        </Link>
                        {visited === 1 ?
                            <p>{visited} country visited</p> :
                            <p>{visited} countries visited</p>}
                    </div>
                    <button onClick={() => handleClick(id)}>Add Friend</button>
                </li>
            })}
        </ul>
    )
}
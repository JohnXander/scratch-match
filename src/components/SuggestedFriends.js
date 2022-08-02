import { Link, useNavigate } from "react-router-dom"

import male from "../img/male.jpg"
import female from "../img/female.jpg"

export default function SuggestedFriends(props) {
    const { people, friends, setFriends, setNotification, countries } = props
    const navigate = useNavigate()

    const handleClick = (userId) => {
        const alreadyExists = friends.find(x => x.id === userId)

        if (alreadyExists !== undefined) {
            setNotification("Friend", "already added")
        } else {
            const selected = people.find(x => x.id === userId)
            const updatedFriends = [...friends, selected]

            fetch("http://localhost:4000/friends", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selected)
            })
                .then(_ => {
                    setNotification("Friend", "added")
                    setFriends(updatedFriends)
                })
            
            navigate("/friends/list")
        }
    }

    return (
        <ul>
            {people.map((person, i) => {
                const { id, firstName, lastName, gender, trail } = person

                const friendsTrail = trail.map(x => x.id)
                const myTrail = countries.map(x => x.id)
                const mutualCountries = myTrail.filter(x => {
                    return friendsTrail.includes(x)
                }).length

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
                        {mutualCountries === 1 ?
                            <p>{mutualCountries} mutual country</p> :
                            <p>{mutualCountries} mutual countries</p>}
                    </div>
                    <button onClick={() => handleClick(id)}>Add Friend</button>
                </li>
            })}
        </ul>
    )
}
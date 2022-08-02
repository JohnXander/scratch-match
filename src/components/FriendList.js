import { Link, useNavigate } from "react-router-dom"

import male from "../img/male.jpg"
import female from "../img/female.jpg"

export default function FriendList(props) {
    const { friends, countries, setFriends, setNotification } = props
    const navigate = useNavigate()

    const handleClick = (userId) => {
        const updatedFriends = friends.filter(x => x.id !== userId)

        fetch(`http://localhost:4000/friends/${userId}`, {
            method: "DELETE"
        })
            .then(_ => {
                setNotification("Friend", "removed")
                setFriends(updatedFriends)
            })
        
        navigate("/friends")
    }

    return (
        <ul>
            {friends.map((friend, i) => {
                const { id, firstName, lastName, gender, trail } = friend

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
                            state={friend}
                        >
                            {firstName} {lastName}
                        </Link>
                        {mutualCountries === 1 ?
                            <p>{mutualCountries} mutual country</p> :
                            <p>{mutualCountries} mutual countries</p>}
                    </div>
                    <button onClick={() => handleClick(id)}>Remove Friend</button>
                </li>
            })}
        </ul>
    )
}
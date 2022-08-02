import worldMap from "../img/map.jpg"
import Pin from "./Pin"

export default function PinList({ user, countries, friends }) {
  
  const { firstName, lastName } = user
  
  const friendsTrails = friends.map(x => x.trail).flat(1)
  const friendsCountries = [...new Set(friendsTrails.map(x => x.id))]
  const myCountries = countries.map(x => x.id)
  const mutualCountries = myCountries.filter(x => {
    return friendsCountries.includes(x)
  })

  return (
    <>
      <header>
      </header>
      <div className="map-container">
        <h2>{firstName} {lastName}'s Scratch Map</h2>
        <ul
          className="pins-list"
          style={{
            backgroundImage: `url("${worldMap}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "700px 600px",
            borderRadius: "3px",
          }}
          >
          {countries.map((country, i) => {
            return (
              <Pin
                key={i}
                country={country}
                mutualCountries={mutualCountries}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}


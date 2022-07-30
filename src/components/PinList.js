import worldMap from "../img/map.jpg"
import Pin from "./Pin"

export default function PinList({ user, countries }) {

  const {firstName, lastName} = user
  
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
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}


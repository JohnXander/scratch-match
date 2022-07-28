
import worldMap from "../img/map4.jpg"
import Pin from "./Pin"

export default function PinList({ countries, user }) {

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
            borderRadius: "3px"
          }}
          >
          {countries.map(country => {
            const { id } = country
            return (
              <Pin
                key={id}
                country={country}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}


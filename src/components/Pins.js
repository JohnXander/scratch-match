import worldMap from "../img/map.png"

export default function Pins({countries, setCountries}) {
  return (
    <>
      <header>
        <h2>Pins</h2>
        
      </header>
      <div className="map-container">
        <ul
          className="pins-list"
          style={{
            backgroundImage: `url("${worldMap}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "700px 400px"
          }}
        >
          {countries.map(country => {
            const { id, name, year, x, y } = country
            return (
              <li
                key={id}
                style={{
                  position: "absolute",
                  left: `${x}px`,
                  top: `${y}px`
                }}
              >
                {id}: {name}, {year}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}


import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PinAdd(props) {
    const { countries, setCountries, world, setNotification } = props
    const initialVal = { name: world[0].name, year: world[0].year}
    const [newPin, setNewPin] = useState(initialVal)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, year } = newPin
        const alreadyExists = countries.find(x => x.name === name)

        if (alreadyExists !== undefined) {
            setNotification(name, "already added")
        } else {
            const selected = world.find(x => x.name === name)
            selected.year = year
            const updatedCountries = [...countries, selected]

            fetch("http://localhost:4000/countries", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selected)
            })
                .then(_ => {
                    setNotification(name, "added")
                    setCountries(updatedCountries)
                })
            
            navigate("/map")
        }

    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="add-form">
                <h2>Add a pin</h2>

                <div>
                    <label htmlFor="name">Country Name</label>
                    <select
                        id="name"
                        name="name"
                        onChange={e => setNewPin({...newPin, name: e.target.value})}
                        style={{ width: "200px" }}>
                        {world.map((country, i) => {
                            const { name } = country
                            return (
                                <option key={i} value={name}>{name}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor="year">Year Visited</label>
                    <input
                        id="year"
                        name="year"
                        type="number"
                        min={1922}
                        max={2022}
                        defaultValue={2012}
                        minLength={4}
                        maxLength={4}
                        style={{ width: "100px" }}
                        onChange={e => setNewPin({...newPin, year: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
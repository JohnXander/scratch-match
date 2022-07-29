import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PinAdd({ countries, setCountries, world }){ 
    const [newPin, setNewPin] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const selected = world.find(x => x.name === newPin.name)
        selected.year = newPin.year
        const updatedCountries = [...countries, selected]

        fetch("http://localhost:4000/countries", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selected)
        })
            .then(resp => resp.json())
            .then(_ => setCountries(updatedCountries))
        
        navigate("/map")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a pin</h2>

            <label htmlFor="name">Country Name</label>
            <select
                id="name"
                name="name"
                onChange={e => setNewPin({...newPin, name: e.target.value})}
                style={{ width: "200px" }}>
                {world.map((country, i) => {
                    const { name } = country
                    return <option key={i} value={name}>{name}</option>
                })}
            </select>

            <label htmlFor="year">Year Visited</label>
            <input
                id="year"
                name="year"
                type="number"
                min={1922}
                max={2022}
                defaultValue={2012}
                onChange={e => setNewPin({...newPin, year: e.target.value})}
                required
            />

            <button type="submit">Add</button>

        </form>
    )
}
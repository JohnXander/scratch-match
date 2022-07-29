import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PinDelete(props) {
    const { countries, setCountries, setNotification } = props
    const initialVal = countries[0].id
    const [oldPinId, setOldPinId] = useState(initialVal)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const selected = countries.find(x => x.id === oldPinId).name
        const updatedCountries = countries.filter(x => x.id !== oldPinId)

        fetch(`http://localhost:4000/countries/${oldPinId}`, {
            method: "DELETE"
        })
            .then(_ => {
                setNotification(selected, "deleted")
                setCountries(updatedCountries)
            })
        
        navigate("/map")
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="add-form">
                <h2>Delete a pin</h2>

                <div>
                    <label htmlFor="name">Country Name</label>
                    <select
                        id="name"
                        name="name"
                        onChange={e => setOldPinId(e.target.value)}
                        style={{ width: "200px" }}>
                        {countries.map((country, i) => {
                            const { id, name } = country
                            return (
                                <option key={i} value={id}>{name}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <button type="submit">Delete</button>
                </div>
            </form>
        </div>
    )
}
import { useLocation } from "react-router-dom"

export default function Country({ friends }) {
    const location = useLocation()
    const { name, year, flag } = location.state

    return (
        <div className="form-container">
            <div className="add-form">
                <img
                    className="country-flag"
                    src={flag}
                    alt="Country Flag"
                />

                <div>
                    <label>Name</label>
                    <input
                        style={{backgroundColor: "white", width: "250px"}}
                        type="text"
                        defaultValue={name}
                        disabled
                    />
                </div>

                <div>
                    <label>Year Visited</label>
                    <input
                        style={{backgroundColor: "white"}}
                        type="text"
                        defaultValue={year}
                        disabled
                    />
                </div>

            </div>
        </div>
    )
}
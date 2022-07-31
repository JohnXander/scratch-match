import { useParams } from "react-router-dom"

export default function Country({ countries }) {
    const { id } = useParams()
    const selected = countries.filter(x => x.id === id)

    console.log("yo", typeof selected[0].name)

    return (
        <div className="form-container">
            <div className="add-form">
                <img
                    className="country-flag"
                    src={selected[0].flag}
                    alt="Country Flag"
                />

                <div>
                    <label>Name</label>
                    <input
                        style={{backgroundColor: "white", width: "250px"}}
                        type="text"
                        defaultValue={selected[0].name}
                        disabled
                    />
                </div>

                <div>
                    <label>Year Visited</label>
                    <input
                        style={{backgroundColor: "white"}}
                        type="text"
                        defaultValue={selected[0].year}
                        disabled
                    />
                </div>

            </div>
        </div>
    )
}
import PinAdd from "./PinAdd";
import PinDelete from "./PinDelete";

export default function PinManage(props) {
    const { countries, setCountries, world, setNotification } = props
    return (
        <>
            <PinAdd
                countries={countries}
                setCountries={setCountries}
                world={world}
                setNotification={setNotification}
            />
            {
                countries.length > 0 &&
                <PinDelete
                    countries={countries}
                    setCountries={setCountries}
                    setNotification={setNotification}
                />
            }
        </>
    )
}
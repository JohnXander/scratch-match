import heroImg from "../img/Hero.jpg"

export default function Hero() {
    return (
        <div className="map-container">
            <img
                style={{
                    width: "700px",
                    borderRadius: "30px"
                }}
                src={heroImg} alt="Hero" />
        </div>
    )
}
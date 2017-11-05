import React from "react"
import H1 from "./H1"
import A from "./A"

const Header = ({deviceNames}) => (
    <div>
        <H1 text="CasaIQ" style={{textAlign:"center"}} />
        <div style={{textAlign:"center"}}>
            <A route="/" text="home" /> 
            <A route="/about-us" text="about" />
            {deviceNames.map(deviceName => (
                <A key={deviceName} route={`/device/${deviceName}`} text={deviceName.split("-")[2]} />
            ))}
            <A route="/device/apt-143-thermostat" text="thermostat" />
        </div>
    </div>
)

export default Header
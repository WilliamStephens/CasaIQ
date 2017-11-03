import React from "react"
import H1 from "./H1"
import A from "./A"

const Header = () => (
    <div>
        <H1 text="CasaIQ" style={{textAlign:"center"}} />
        <div style={{textAlign:"center"}}>
            <A route="/" text="home" /> | <A route="/about-us" text="about" /> | <A route="/device/lock" text="door lock" /> | <A route="/device/thermostat" text="thermostat" /> 
        </div>
    </div>
)

export default Header
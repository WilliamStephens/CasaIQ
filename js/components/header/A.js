import React from "react"
import { Link } from "react-router-dom"

const A = ({route, text}) => (
    <Link style={{paddingRight:"5px"}} to={route}>{text}</Link>
)

export default A
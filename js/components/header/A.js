import React from "react"
import { Link } from "react-router-dom"

const A = ({route, text}) => (
    <Link to={route}>{text}</Link>
)

export default A
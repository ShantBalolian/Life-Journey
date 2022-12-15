import React from "react";
import globeIcon from "../images/globe.png"
function Navbar(){
    return(
    <div className="nav-header">
        <img className="nav-icon" src={globeIcon} alt="img not working"></img>
        <h2 className="nav-title">My Life Journal.</h2>
    </div>
    )
}

export default Navbar
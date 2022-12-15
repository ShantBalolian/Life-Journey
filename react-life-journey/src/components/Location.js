import React from "react";
import locationIcon from "../images/location-icon.png"

function Location(props){
    return(
        <div className="location-container">
            <img className="location-image" src ={props.imageUrl} alt ='not working' ></img>
            <section>
                <span>
                   <img className="location-icon" src = {locationIcon} alt='not working'></img>
                   <p className="location-country">{props.country}</p>
                    <a href={props.googleMapsUrl} target='_blank'> View on Google Maps</a>
                </span>
                <h1 className="location-city">{props.city}</h1>
                <p className="location-date">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="location-description">{props.description}</p>
            </section>
        </div>
    )
}

export default Location
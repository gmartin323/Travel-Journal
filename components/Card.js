import React from 'react'

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={`../images/${props.item.imageUrl}`} className="card--image"/>
                <div className="card--info">
                    
                        
                        <a href={`${props.item.googleMapsUrl}`} className="card--location"><img src="../images/icon-pin.png" className="card--location_pin">
                        </img>
                        <h3 className="card--location_title">{props.item.location}</h3></a>
                    <div className="card--header">
                        <h2 className="card--title">{props.item.title}</h2>
                        <h4 className="card--date">{props.item.startDate} - {props.item.endDate}</h4>
                    </div>
                    <p className="card--desc">{props.item.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}


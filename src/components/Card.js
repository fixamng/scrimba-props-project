import React from "react";
import { ImLocation } from "react-icons/im";

export default function Card(props) {
  const { img, location, link, title, startDate, endDate, description } =
    props.item;
  return (
    <div className="card-container">
      <div className="card-div">
        <div className="card-logo">
          <img src={`./images/${img}`} alt="" />
        </div>
        <div className="card-content">
          <div className="card-content-map">
            <ImLocation className="location-logo" />
            <span className="location">{location}</span>
            <a href={link}>
              <span className="link">View on Google Maps</span>
            </a>
          </div>
          <h2>{title}</h2>
          <h3>
            {startDate} - {endDate}
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

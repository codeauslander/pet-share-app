import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const { index, name, imageUrl, latitude, longitude } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={imageUrl} alt="pet" />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="name">{name}</p>
        <p className="location">
          {latitude} <br />
          {longitude}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;

import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const { index, name, imageUrl, bio, zipcode } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={imageUrl} alt="pet" />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="name">{name}</p>
        <p className="location">
          {bio} <br />
          {zipcode}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;

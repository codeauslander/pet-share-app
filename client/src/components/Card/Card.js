import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Link } from "react-router-dom";

const yes = () => {
  console.log('');
  let params = {petowner_id:1,swipe_by_sitter_value:'yes'};
  let user = null;

  axios.get('/users')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));

  axios.post('/api/swipes',params)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
  
};

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

        <Link to="/chatkit">
          <button onClick={yes.bind(this)}>Yes</button>
        </Link>

      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;

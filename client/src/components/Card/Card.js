import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Link } from "react-router-dom";
const yes = () => {
  let params = {petowner_id:1,swipe_by_sitter_value:'yes'};
  // let user = null;
  axios.get('/users')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
  axios.post('/api/swipes',params)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};
const Card = ({ property }) => {
  const { index, pet_name, pet_bio, start_date, end_date, petowner_image_medium } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={petowner_image_medium} alt="pet" />
      <div className="details">
        <span className="id">{index}</span>
        <p className="name">{pet_name}</p>
        <p className="location">
          {pet_bio} <br />
          {start_date} <br />
          {end_date} <br />
          <Link to="/chatkit">
            <button onClick={yes.bind(this)}>Yes</button>
          </Link>
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  property: PropTypes.object.isRequired
};
export default Card;

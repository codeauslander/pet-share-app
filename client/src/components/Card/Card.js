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

  // const { index, name, imageUrl, bio, zipcode } = property;
  console.log(property);
  const { index, pet_name, pet_bio, start_date, end_date } = property;

  return (
    <div id={`card-${index}`} className="card">
      {/* <img src={imageUrl} alt="pet" /> */}
      <img src='https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&h=350' alt="pet" />
      <div className="details">
        <span className="id">{index}</span>
        <p className="name">{pet_name}</p>
        <p className="location">
          {pet_bio} <br />
          {start_date} <br />
          {end_date}
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

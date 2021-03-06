import React from "react";
import PropTypes from "prop-types";
// import axios from 'axios';
import { Link } from "react-router-dom";
const yes = () => {
  // let params = {sitter_id:1,swipe_by_sitter_value:'yes'};
  // // let user = null;
  // axios.get('/users')
  //   .then((response) => console.log(response.data))
  //   .catch((error) => console.log(error));
  // axios.post('/api/swipes',params)
  //   .then((response) => console.log(response.data))
  //   .catch((error) => console.log(error));
};
const Card = ({ property }) => {
  console.log(property);
  const { index, name, bio, sitter_image_medium } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={sitter_image_medium} alt="pet" />
      <div className="details">
        <span className="id">{index}</span>
        <p className="name">{name}</p>
        <p className="location">
          {bio} <br />

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

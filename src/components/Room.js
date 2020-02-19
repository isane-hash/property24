import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/house-1.jpg';
import PropTypes from 'prop-types';
import { memo } from 'react';

const Room = memo(({ house }) => {
  const { name, slug, price } = house;
  // 
  
        // set the default images
        // link that will guide us to the roo details i used slug name to access different room details
        // get the name of the rooms
  return (
    <article className="house">
      <div className="img-container">
        <img className="houseImg" src={ defaultImg} alt="single house"/>
        <div className="price-top">
          <h6>R{price}</h6>
          <p>asking price</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary house-link">
          Details
        </Link>
      </div>
      <p className="house-info">{name}</p>
    </article>
  );
});
// setting up prop types
// use shapes to check the property types
Room.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;

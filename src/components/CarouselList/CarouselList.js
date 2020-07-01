import React from 'react';
import PropTypes from 'prop-types';

import './CarouselList.css';

export const CarouselList = ({ images, transform }) => (
  <ul className="Carousel__list">
    {images.map(img => (
      <li
        className="list-item"
        style={transform}
      >
        <img src={img} alt="emoji" />
      </li>
    ))}
  </ul>
);

CarouselList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  transform: PropTypes.shape({
    transform: PropTypes.string.isRequired,
    transition: PropTypes.string,
  }).isRequired,
};

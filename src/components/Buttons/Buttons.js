import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

export const Buttons = ({ moveLeft, moveRight }) => (
  <div className="Carousel__buttons">
    <button
      type="button"
      onClick={moveLeft}
      className="btn"
    >
      Prev
    </button>
    <button
      type="button"
      onClick={moveRight}
      className="btn"
    >
      Next
    </button>
  </div>
);

Buttons.propTypes = {
  moveLeft: PropTypes.func.isRequired,
  moveRight: PropTypes.func.isRequired,
};

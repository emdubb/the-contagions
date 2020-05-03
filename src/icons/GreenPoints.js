import React from 'react';
import PropTypes from 'prop-types';

const GreenPoints = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 91.69 79.4"
    fill="#80c268"
    className={className}
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          d="M91,45.51c0,9.43.66,33.89.66,33.89L.12,79.08S0,55.06,0,45.51a45.52,45.52,0,0,1,91,0Z"
        />
      </g>
    </g>
  </svg>
);

GreenPoints.propTypes = {
  className: PropTypes.string,
};

export default GreenPoints;

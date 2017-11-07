import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../../utilities/string';

const H3 = ({ deviceNameParts }) => (
  <div>
    <h3 className="title">
      {`${capitalizeFirstLetter(deviceNameParts[0])} ${deviceNameParts[1]} ${capitalizeFirstLetter(deviceNameParts[2])}`}
    </h3>
  </div>
);

H3.propTypes = {
  deviceNameParts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default H3;

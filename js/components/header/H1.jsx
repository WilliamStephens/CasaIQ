import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ text }) => (
  <h1 className="title is-centered">{text}</h1>
);

H1.propTypes = {
  text: PropTypes.string.isRequired,
};

export default H1;


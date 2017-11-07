import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const A = ({ route, text }) => (
  <li><NavLink to={route}>{text}</NavLink></li>
);

A.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default A;

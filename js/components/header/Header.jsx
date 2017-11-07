import React from 'react';
import PropTypes from 'prop-types';
import H1 from './H1';
import A from './A';

const Header = ({ deviceNames }) => (
  <div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <H1 text="CasaIQ" />
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs is-centered">
        <div className="container">
          <ul>
            <A route="/" text="home" />
            <A route="/about-us" text="about" />
            {deviceNames.map(deviceName => (
              <A
                key={deviceName}
                route={`/device/${deviceName}`}
                text={deviceName.split('-')[2]}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

Header.propTypes = {
  deviceNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;

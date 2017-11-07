import React from 'react';
import PropTypes from 'prop-types';
import H3 from './H3';

const getCurrentLockState = (deviceID, deviceInfo) => {
  const lock = deviceInfo[deviceID];
  return lock[lock.length - 1].state === 'locked' ? 'unlock' : 'lock';
};

const buttonStyle = {
  margin: '0.5em',
};

const Lock = ({ deviceNameParts, deviceInfo, onLockClick }) => {
  const deviceID = deviceNameParts.join('-');
  const lockState = getCurrentLockState(deviceID, deviceInfo);
  return (
    <div className="box has-text-centered">
      <H3 deviceNameParts={deviceNameParts} />
      <button style={buttonStyle} className={`button ${lockState === 'lock' ? 'is-danger' : 'is-success'}`} type="button" onClick={() => onLockClick(deviceID)}>
        {lockState}
      </button>
    </div>
  );
};

Lock.propTypes = {
  deviceNameParts: PropTypes.arrayOf(PropTypes.string).isRequired,
  deviceInfo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
    state: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
  }))).isRequired,
  onLockClick: PropTypes.func.isRequired,
};

export default Lock;

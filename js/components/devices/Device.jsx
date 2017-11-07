import React from 'react';
import PropTypes from 'prop-types';
import Lock from './Lock';
import NotImplemented from './NotImplemented';

const getDeviceNameParts = deviceName => deviceName.split('-');

const Device = (props) => {
  const deviceNameParts = getDeviceNameParts(props.match.params.deviceName);

  return (deviceNameParts[2] === 'lock' ?
    <Lock
      deviceNameParts={deviceNameParts}
      deviceInfo={props.deviceInfo}
      onLockClick={props.onLockClick}
    /> :
    <NotImplemented />
  );
};

Device.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      deviceName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  deviceInfo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
    state: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
  }))).isRequired,
  onLockClick: PropTypes.func.isRequired,
};

export default Device;

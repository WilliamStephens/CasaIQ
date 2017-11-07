import { connect } from 'react-redux';
import toggleLock from '../actions/lockAction';
import Device from '../components/devices/Device';

const mapStateToProps = state => ({
  deviceInfo: state.deviceReducer,
});

const mapDispatchToProps = dispatch => ({
  onLockClick: (id) => {
    dispatch(toggleLock(id));
  },
});

const DeviceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Device);

export default DeviceContainer;

import { connect } from 'react-redux';
import Header from '../components/header/Header';

const mapStateToProps = state => ({
  deviceNames: Object.keys(state.deviceReducer),
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;

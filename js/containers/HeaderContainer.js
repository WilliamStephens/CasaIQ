import { connect } from "react-redux"
import { toggleLock } from "../actions/lockAction"
import Header from "../components/header/Header"

const mapStateToProps = state => {
    return {
        deviceNames: Object.keys(state.lockReducer)
    }
}

const HeaderContainer = connect(
    mapStateToProps
)(Header)

export default HeaderContainer
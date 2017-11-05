import { connect } from "react-redux"
import { toggleLock } from "../actions/lockAction"
import Lock from "../components/lock/Lock";

const mapStateToProps = state => {
    return {
        locks: state.lockReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLockClick : id => {
            dispatch(toggleLock(id))
        }
    }
}

const LockContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Lock)

export default LockContainer
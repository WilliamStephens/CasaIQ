const initialState = {
    "apt-145-lock": [
        {
            state: "locked",
            timestamp: 1508386138
        }
    ]
}

const createNewLock = action => ({state: action.state, timestamp: action.timestamp})

const lockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_LOCK":
            return state[action.id].length > 9 ? 
                [ ...state.slice(1, state.length - 1), createNewLock(action)] : 
                [ ...state[action.id], createNewLock(action)]
        default:
            return state
    }
}

export default lockReducer
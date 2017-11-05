const initialState = {
    "apt-145-lock": [
        {
            state: "locked",
            timestamp: 1508386138
        }
    ]
}

const createNewLockState = (action, newLockState) => {
    return {state: newLockState, timestamp: action.timestamp}
}

const getPreviousLockState = lockStates => {
    return lockStates[lockStates.length - 1].state === "locked" ? "unlocked" : "locked" 
}

const lockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_LOCK":
            const lockStates = state[action.slug];
            return lockStates.length > 9 ? 
                { [action["slug"]] : 
                    [ ...lockStates.slice(1, lockStates.length), createNewLockState(action, getPreviousLockState(lockStates))]
                } : 
                { [action["slug"]] :
                    [ ...lockStates, createNewLockState(action, getPreviousLockState(lockStates))]
                }
        default:
            return state
    }
}

export default lockReducer
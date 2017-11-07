const initialState = {
  'apt-145-lock': [
    {
      state: 'locked',
      timestamp: 1508386138,
    },
  ],
  'apt-145-thermostat': [],
};

const createNewLockState = (action, newLockState) => (
  { state: newLockState, timestamp: action.timestamp }
);

const getPreviousLockState = lockStates => (lockStates[lockStates.length - 1].state === 'locked' ? 'unlocked' : 'locked');

const deviceReducer = (state = initialState, action) => {
  const lockStates = state[action.slug];
  switch (action.type) {
    case 'TOGGLE_LOCK':
      return lockStates.length > 9 ?
        Object.assign({}, state, {
          [action.slug]:
                        [...lockStates.slice(1, lockStates.length),
                          createNewLockState(action, getPreviousLockState(lockStates))],
        }) :
        Object.assign({}, state, {
          [action.slug]:
                        [...lockStates,
                          createNewLockState(action, getPreviousLockState(lockStates))],
        });
    default:
      return state;
  }
};

export default deviceReducer;

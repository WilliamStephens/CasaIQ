import { getTimestampSeconds } from "../utilities/date"

export const toggleLock = (state, id) => {
    return {
        type: "TOGGLE_LOCK",
        state: state,
        timestamp: getTimestampSeconds(),
        id
    }
}
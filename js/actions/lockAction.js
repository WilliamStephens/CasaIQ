import { getTimestampSeconds } from "../utilities/date"

export const toggleLock = id => {
    return {
        type: "TOGGLE_LOCK",
        timestamp: getTimestampSeconds(),
        slug: id
    }
}
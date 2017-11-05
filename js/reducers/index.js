import { combineReducers } from "redux"
import lockReducer from "./lockReducer";

const deviceApp = combineReducers({
    lockReducer
})

export default deviceApp
import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {compReducer} from "./comp/compReducer";
import {logicReducer} from "./logic/logicReducer";

export const rootReducer = combineReducers({
    userReducer,
    compReducer,
    logicReducer
})
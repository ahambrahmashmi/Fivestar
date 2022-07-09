import { combineReducers } from "redux";

import createaccountReducer from "./createAccount/reducer";
import sportsReducer from "./EditDetails/reducer";
const rootReducer=combineReducers({
   createaccountReducer,
   sportsReducer
})

export default rootReducer
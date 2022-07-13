import { combineReducers } from "redux";

import createaccountReducer from "./createAccount/reducer";
import sportsReducer from "./EditDetails/reducer";
import zipcodeReducer from "./zipCode/reducer";
const rootReducer=combineReducers({
   createaccountReducer,
   sportsReducer,
   zipcodeReducer
})

export default rootReducer
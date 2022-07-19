import { combineReducers } from "redux";

import createaccountReducer from "./createAccount/reducer";
import sportsReducer from "./EditDetails/reducer";
import zipcodeReducer from "./zipCode/reducer";
import signinReducer from "./SignIn/reducer";
const rootReducer=combineReducers({
   createaccountReducer,
   sportsReducer,
   zipcodeReducer,
   signinReducer
})

export default rootReducer
import { combineReducers } from "redux";

import createaccountReducer from "./createAccount/reducer";
import sportsReducer from "./EditDetails/reducer";
import zipcodeReducer from "./zipCode/reducer";
import signinReducer from "./SignIn/reducer";
import homeReducer from "./Home/reducer";
import searchFeedReducer from "./searchFeeds/reducer";

const rootReducer=combineReducers({
   createaccountReducer,
   sportsReducer,
   zipcodeReducer,
   signinReducer,
   homeReducer,
   searchFeedReducer
})

export default rootReducer
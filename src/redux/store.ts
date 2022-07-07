import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger'
import rootReducer from "./rootReducer";
const store=createStore(rootReducer,applyMiddleware(thunk,createLogger({})));

export default store
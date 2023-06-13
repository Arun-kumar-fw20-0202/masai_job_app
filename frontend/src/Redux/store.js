import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { jobReducer } from "./reducer";

//
// const rootReducer = combineReducers({ jobReducer });

export const store = legacy_createStore(jobReducer, applyMiddleware(thunk));

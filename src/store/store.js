import {initialState} from "./initialState";
import {createStore} from "redux";
import {reducer} from "./reducers";

const store = createStore(reducer, initialState);

export default store;
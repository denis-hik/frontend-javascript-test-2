import {initialState} from "./initialState";
import {createStore} from "redux";
import {reducer} from "./reducers";

const store: any = createStore(reducer, initialState);

export default store;
import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";

const RootReducer = combineReducers({
    counter: CounterReducer
});

export default RootReducer
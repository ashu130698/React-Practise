import { createStore } from "redux";
import CounterReducer from "./counterReducer";
import RootReducer from "./rootReducer";

const store = createStore(RootReducer);   // if there is one counter then we can directly include in brackts

export default store;
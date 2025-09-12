import { createStore } from "redux";
import CounterReducer from "./counterReducer";

const store = createStore(CounterReducer);   // if there is one counter then we can directly include in brackts

export default store;
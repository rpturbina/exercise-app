import { createStore } from "redux";
import { gifReducer } from "../reducers";

const store = createStore(gifReducer, { query: "" });

export default store;

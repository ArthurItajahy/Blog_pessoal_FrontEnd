import { createStore } from "redux";
import { userReducer } from "./tokens/keysRedux";


const store = createStore(userReducer);

export default store;


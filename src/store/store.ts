import { createStore } from "redux";
import { tokenReducer } from "./tokens/tokensRedux";


const store = createStore(tokenReducer);

export default store;


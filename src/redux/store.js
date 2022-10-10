import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import favoriteReducer from "./favorite-reducer";

let reducers = combineReducers({
  auth: authReducer,
  favorite: favoriteReducer,
});

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;

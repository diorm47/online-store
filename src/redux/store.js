import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import cartReducer from "./cart-reducer";
import favoriteReducer from "./favorite-reducer";
import searchReducer from "./search-reducer";

let reducers = combineReducers({
  auth: authReducer,
  favorite: favoriteReducer,
  cart: cartReducer,
  search: searchReducer,
});

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;

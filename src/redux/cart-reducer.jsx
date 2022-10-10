const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const CHECKOUT = "CHECKOUT";

let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };

    case CHECKOUT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const deleteFromCart = (payload) => {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
};

export default cartReducer;

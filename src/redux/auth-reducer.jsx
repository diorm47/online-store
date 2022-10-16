const CREATE_ACCOUNT = "CREATE_ACCOUNT";
const AUTH_USER = "AUTH_USER";

let initialState = {
  email: null,
  password: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        isAuth: (state.isAuth = true),
        email: (state.email = action.payload),
      };

    case AUTH_USER:
      return {
        ...state,
        isAuth: (state.isAuth = true),
        email: (state.email = action.payload),
        password: (state.password = action.payload),
      };

    default:
      return state;
  }
};

export const createAccount = (payload) => {
  return {
    type: CREATE_ACCOUNT,
    payload,
  };
};
export const login = (payload) => {
  return {
    type: AUTH_USER,
    payload,
  };
}

export const getAuthUserData = () => async (dispatch) => {};



export const logout = () => async (dispatch) => {};

export default authReducer;

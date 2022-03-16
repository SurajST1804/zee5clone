let initialstate = {
  signup: [],
  signin: [],
};

let AuthReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, signup: action.payload };

    case "SIGN_IN":
      return { ...state, signin: action.payload };

    default:
      return state;
  }
};

export default AuthReducer;

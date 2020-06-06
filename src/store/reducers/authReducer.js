const initState = {
  authError: null,
  isAuthUser: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login failed");
      return {
        ...state,
        authError:
          "SORRY, THIS DOES NOT MATCH OUR RECORDS. CHECK YOUR SPELLING AND TRY AGAIN.",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
        isAuthUser: true,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return {
        ...state,
        isAuthUser: false,
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
};

export default authReducer;

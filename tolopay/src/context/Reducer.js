const Reducer = (state, action) => {
  // console.log("paayload .. ...>>",action.payload.data.token)
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
        token:null
      };
    case "SUCCESS":
      return {
        user: action.payload,
        token:action.payload.data.token,
        isFetching: false,
        error: false,
      };
    case "FAILED":
      return {
        user: null,
        token:null,
        isFetching: false,
        error: true,
      };
      case "UPDATE_START":
        return {
          ...state,
          isFetching:true
        };
      case "UPDATE_SUCCESS":
        return {
          user: {...state.user ,...action.payload},
          token:state.token,
          isFetching: false,
          error: false,
        };
      case "UPDATE_FAILURE":
        return {
          user: state.user,
          isFetching: false,
          error: true,
        };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;

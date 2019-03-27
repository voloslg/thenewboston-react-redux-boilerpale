export default function(state = null, action) {
  switch (action.type) {
    case "USER_SELECTED":
      return {
        ...state,
        activeUser: action.payload
      };

    default:
      return state;
  }
}

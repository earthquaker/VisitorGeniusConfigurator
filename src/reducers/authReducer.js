export default function reducer(state={}, action) {
  switch(action.type) {
    case "UPDATE_USER_DATA": {
      state = {...action.payload};
      return state;
    }
    default:
      return state;
  }
};
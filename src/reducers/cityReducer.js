import { SET_CITY } from "../actions/Types";
import { initialState } from "../store/getStore";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return action.city;
    default:
      return state;
  }
};

export default reducer;

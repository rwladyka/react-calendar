import { SET_DATE } from "../actions/Types";
import { initialState } from "../store/getStore";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
};

export default reducer;

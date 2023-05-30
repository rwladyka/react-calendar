import { CLOSE_MODAL, OPEN_MODAL } from "../actions/Types";
import { initialState } from "../store/getStore";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.openModalDay;
    case CLOSE_MODAL:
      return 0;
    default:
      return state;
  }
};

export default reducer;

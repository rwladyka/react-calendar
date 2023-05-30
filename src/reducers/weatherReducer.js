import { LOADING_WEATHER, SET_WEATHER, ERROR_WEATHER } from "../actions/Types";
import { initialState } from "../store/getStore";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_WEATHER: {
      return {
        loading: true,
        error: false,
        data: undefined,
      };
    }
    case SET_WEATHER: {
      return {
        data: action.weather,
        loading: false,
        error: false,
      };
    }
    case ERROR_WEATHER: {
      return {
        loading: false,
        data: undefined,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;

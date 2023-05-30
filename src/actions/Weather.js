import { findWeather } from "../services/weatherService";
import { SET_WEATHER, LOADING_WEATHER, ERROR_WEATHER } from "./Types";

const setWeather = (weather) => ({
  type: SET_WEATHER,
  weather,
});

export const loadWeather = () => async (dispatch, getState) => {
  dispatch({ type: LOADING_WEATHER });
  const city = getState().city;

  try {
    const data = await findWeather(city);
    dispatch(setWeather(data));
  } catch (e) {
    dispatch({
      type: ERROR_WEATHER,
      error: e.message || "Unexpected Error!!!",
    });
  }
};

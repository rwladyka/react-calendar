import { formatDate } from "../utils/Date";
import { mockData } from "./weather";

const APP_KEY = process.env.REACT_APP_SECRET_VISUALCROSSING;
const HOST = "weather.visualcrossing.com";
const PATH = "/VisualCrossingWebServices/rest/services/timeline";
const PARAMS = "unitGroup=metric&contentType=json";

const findWeather = async (city, date = "", mock = false) => {
  if (mock) return mockData;
  if (!date) {
    date = formatDate(new Date());
  }

  const req = await fetch(
    `https://${HOST}${PATH}/${city}/${date}/${date}?${PARAMS}&key=${APP_KEY}`
  );

  if (!req.ok) {
    const text = await req.text();
    throw new Error(text);
  }

  const json = await req.json();

  return json;
};

export { findWeather };

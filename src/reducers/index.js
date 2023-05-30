import { combineReducers } from "redux";

import city from "./cityReducer";
import date from "./dateReducer";
import openModalDay from "./openModalDayReducer";
import reminders from "./reminderReducer";
import weather from "./weatherReducer";

const reducers = {
  city,
  date,
  openModalDay,
  reminders,
  weather,
};

export default combineReducers(reducers);

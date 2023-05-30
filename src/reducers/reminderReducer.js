import {
  DELETE_REMINDER,
  SAVE_REMINDER,
  LOAD_REMINDER,
} from "../actions/Types";
import { initialState } from "../store/getStore";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_REMINDER:
      // Deep clone object
      const reminders = JSON.parse(JSON.stringify(state));
      reminders[action.reminder.date] = reminders[action.reminder.date] || [];
      if (action.index !== undefined) {
        reminders[action.reminder.date][action.reminder.index] =
          action.reminder;
      } else {
        reminders[action.reminder.date].push(action.reminder);
      }
      reminders.loaded = undefined;
      return reminders;
    case LOAD_REMINDER:
      return {
        ...state,
        loaded: {
          data: state[action.reminder.date]?.[action.reminder.index],
          index: action.reminder?.index,
        },
      };
    case DELETE_REMINDER:
      // Deep clone object
      const remnds = JSON.parse(JSON.stringify(state));
      remnds[action.reminder.date] = remnds[action.reminder.date]?.filter(
        (_, i) => i !== action.reminder.index
      );

      remnds.loaded = undefined;
      return remnds;
    default:
      return state;
  }
};

export default reducer;

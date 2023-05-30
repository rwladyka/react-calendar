import { DELETE_REMINDER, SAVE_REMINDER, LOAD_REMINDER } from "./Types";

export const saveReminder = (reminder, index) => ({
  type: SAVE_REMINDER,
  reminder,
  index,
});

export const loadReminder = (date, index) => ({
  type: LOAD_REMINDER,
  reminder: {
    date,
    index,
  },
});

export const deleteReminder = (date, index) => ({
  type: DELETE_REMINDER,
  reminder: {
    date,
    index,
  },
});

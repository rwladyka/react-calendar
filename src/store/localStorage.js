const LOCAL_KEY = "rw-state";

const initialState = {
  city: "",
  date: new Date(),
  reminders: {},
  openModalDay: 0,
  weather: {
    data: undefined,
    loading: false,
    error: false,
  },
};

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_KEY, serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem(LOCAL_KEY);
    if (serialisedState === null) return initialState;

    const json = JSON.parse(serialisedState);
    return { ...initialState, ...json, date: new Date(json.date) };
  } catch (e) {
    return initialState;
  }
};

export { loadFromLocalStorage, saveToLocalStorage };

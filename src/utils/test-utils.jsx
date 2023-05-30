import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";

import cityReducer from "../reducers/cityReducer";
import dateReducer from "../reducers/dateReducer";
import openModalDayReducer from "../reducers/openModalDayReducer";
import reminderReducer from "../reducers/reminderReducer";
import weatherReducer from "../reducers/weatherReducer";
import { initialState } from "../store/getStore";

function render(
  ui,
  {
    preloadedState = initialState,
    store = configureStore({
      reducer: {
        city: cityReducer,
        date: dateReducer,
        openModalDay: openModalDayReducer,
        reminders: reminderReducer,
        weather: weatherReducer,
      },
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// override render method
export { render };

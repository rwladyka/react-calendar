import React from "react";

import { fireEvent, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { render } from "../utils/test-utils";
import Forecast from "./Forecast";

export const handlers = [
  rest.get("https://weather.visualcrossing.com/*", (req, res, ctx) => {
    if (req.params[0].includes("Curitiba")) {
      return res(
        ctx.json({
          resolvedAddress: "Curitiba, PR, Brasil",
          currentConditions: {
            conditions: "Rain, Partially cloudy",
            dew: "16",
          },
        }),
        ctx.delay(150)
      );
    }

    return res(
      ctx.status(400),
      ctx.text(
        "Invalid location found. Please check your location parameter:dsadsadas"
      ),
      ctx.delay(150)
    );
  }),
];

describe("Forecast", () => {
  const server = setupServer(...handlers);

  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it("should fetches & receives a forecast weather after clicking the find button", async () => {
    render(<Forecast />);

    expect(screen.getByText(/No weather forecast/i)).toBeInTheDocument();

    //Typing city name for forecast.
    const input = screen.getByTestId("rw-input-data-test-id");
    fireEvent.change(input, { target: { value: "Curitiba" } });

    // after clicking the 'Find' button, it should now show the loading
    fireEvent.click(screen.getByRole("button", { name: /Find/i }));
    expect(await screen.getByTestId("rw-loading-test-id")).toBeInTheDocument();

    // after some time, the forecast should be received
    expect(
      await screen.findByText(/Curitiba, PR, Brasil/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Rain, Partially cloudy/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/No weather forecast/i)).not.toBeInTheDocument();
    expect(
      await screen.queryByTestId("rw-loading-test-id")
    ).not.toBeInTheDocument();
  });

  it("should show error message on not find city typed", async () => {
    const t = render(<Forecast />);

    expect(screen.getByText(/No weather forecast/i)).toBeInTheDocument();

    //Typing city name for forecast.
    const input = screen.getByTestId("rw-input-data-test-id");
    fireEvent.change(input, { target: { value: "dfsdasafdsa" } });

    // after clicking the 'Find' button, it should now show the loading
    fireEvent.click(screen.getByRole("button", { name: /Find/i }));
    expect(await screen.getByTestId("rw-loading-test-id")).toBeInTheDocument();
    expect(
      await screen.findByText(/Invalid location found./i)
    ).toBeInTheDocument();
  });
});

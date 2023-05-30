import React from "react";

import { fireEvent, screen } from "@testing-library/react";

import { render } from "../../utils/test-utils";
import Agenda from "../Agenda";
import ModalReminder from "../Modal/ModalReminder";

describe("Agenda", () => {
  it("should render empty agenda", async () => {
    render(<Agenda />);

    expect(screen.getByText(/Monday/i)).toBeInTheDocument();
    expect(screen.getByText(/18/i)).toBeInTheDocument();
  });

  it("should save reminder", async () => {
    render(
      <>
        <Agenda />
        <ModalReminder />
      </>
    );

    const cell = await screen.findAllByTestId("rw-cell-reminder");
    await fireEvent.dblClick(cell[10]);
    expect(screen.getByText(/Reminder on:/i)).toBeInTheDocument();

    const inputCity = screen.getByPlaceholderText("Type your city");
    fireEvent.change(inputCity, { target: { value: "Curitiba" } });

    const inputReminder = screen.getByPlaceholderText("Type your reminder");
    fireEvent.change(inputReminder, { target: { value: "Test Reminder" } });

    const inputHour = screen.getByPlaceholderText("Type the hour");
    fireEvent.change(inputHour, { target: { value: "20:50" } });

    // click on save to save the reminder
    await fireEvent.click(screen.getByRole("button", { name: /save/i }));
    // click on cancel to close the modal
    await fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
    expect(await screen.getByText("Test Reminder")).toBeInTheDocument();
  });

  it("should edit reminder", async () => {
    render(
      <>
        <Agenda />
        <ModalReminder />
      </>
    );

    const cell = await screen.findAllByTestId("rw-cell-reminder");
    await fireEvent.dblClick(cell[10]);
    expect(screen.getByText(/Reminder on:/i)).toBeInTheDocument();

    const inputCity = screen.getByPlaceholderText("Type your city");
    fireEvent.change(inputCity, { target: { value: "Curitiba" } });

    const inputReminder = screen.getByPlaceholderText("Type your reminder");
    fireEvent.change(inputReminder, { target: { value: "Test Reminder" } });

    const inputHour = screen.getByPlaceholderText("Type the hour");
    fireEvent.change(inputHour, { target: { value: "20:50" } });

    // click on save to save the reminder
    await fireEvent.click(screen.getByRole("button", { name: /save/i }));
    // click on cancel to close the modal
    await fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
    expect(await screen.getByText(/Test Reminder/i)).toBeInTheDocument();

    const flag = await screen.getByTestId("rw-flag-reminder");
    await fireEvent.click(flag);

    const editReminder = screen.getByPlaceholderText("Type your reminder");
    fireEvent.change(editReminder, { target: { value: "Edit Reminder" } });

    // click on save to save the reminder
    await fireEvent.click(screen.getByRole("button", { name: /save/i }));
    // click on cancel to close the modal
    await fireEvent.click(screen.getByRole("button", { name: /cancel/i }));

    expect(screen.queryByText(/Test Reminder/i)).not.toBeInTheDocument();
    expect(screen.getByText("Edit Reminder")).toBeInTheDocument();
  });
});

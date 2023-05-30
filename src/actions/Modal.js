import { OPEN_MODAL, CLOSE_MODAL } from "./Types";

export const openModalDay = (day) => ({
  type: OPEN_MODAL,
  openModalDay: day,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

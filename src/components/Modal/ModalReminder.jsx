import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../../actions/Modal";
import {
  deleteReminder,
  loadReminder,
  saveReminder,
} from "../../actions/Reminders";
import Button from "../BasicComponents/Button";
import InputText from "../BasicComponents/InputText";
import TimeSelector from "../DateSelector/HourSelector";
import Hourly from "../Forecast/Hourly";
import Modal from "../Modal";

const ModalReminder = () => {
  const {
    date,
    openModalDay,
    reminders: { loaded },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [modalCity, setModalCity] = useState(loaded?.data?.city);
  const [reminder, setReminder] = useState(loaded?.data?.reminder);
  const [hour, setHour] = useState(loaded?.data?.hour);
  const [period, setPeriod] = useState(loaded?.data?.period);
  const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${openModalDay}`;

  useEffect(() => {
    setModalCity(loaded?.data?.city);
    setReminder(loaded?.data?.reminder);
    setHour(loaded?.data?.hour);
    setPeriod(loaded?.data?.period);
  }, [loaded]);

  const handleSave = () => {
    if (reminder?.length < 3) return false;
    dispatch(
      saveReminder(
        {
          date: formattedDate,
          city: modalCity,
          reminder,
          hour,
          period,
        },
        loaded?.index
      )
    );
    handleClose();
  };

  const handleClose = () => {
    dispatch(closeModal());
    setModalCity("");
    setReminder("");
    setHour("");
    setPeriod();
    // dispatch(loadReminder("", -1));
  };

  if (!openModalDay) return null;

  return (
    <Modal
      title={`Reminder on: ${date.getMonth()}/${openModalDay}/${date.getFullYear()}`}
      onClose={handleClose}
      onSave={handleSave}
    >
      <InputText
        id="rw-modal-city"
        name="city"
        label="City"
        value={modalCity}
        placeholder="Type your city"
        onChange={({ target }) => setModalCity(target.value)}
      />
      <div style={{ margin: "16px 0" }}>
        <InputText
          id="rw-modal-reminder"
          name="reminder"
          label="Reminder"
          value={reminder}
          minLength={3}
          maxLength={30}
          placeholder="Type your reminder"
          onChange={({ target: { value } }) => {
            if (value.length > 30) return;
            setReminder(value);
          }}
        />
      </div>
      <TimeSelector
        hour={hour}
        onChange={(val) => setHour(val)}
        period={period}
        onSelect={(p) => setPeriod(p)}
      />
      <div style={{ margin: "8px 0" }}>
        {loaded?.data?.reminder && (
          <Button
            onClick={() => {
              dispatch(deleteReminder(formattedDate, loaded?.index));
              handleClose();
            }}
            variant="warning"
          >
            Delete
          </Button>
        )}
      </div>
      <Hourly
        city={modalCity}
        day={openModalDay}
        reminderHour={hour}
        period={period}
      />
    </Modal>
  );
};

export default ModalReminder;

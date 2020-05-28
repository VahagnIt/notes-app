import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FireBaseContext } from "../context/fireBase/fireBaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const { addNote } = useContext(FireBaseContext);
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      addNote(value)
        .then(() => show("Note was added successfully", "success"))
        .catch((e) => show("something goes wrong", "danger"));
    } else {
      show("input can`t be empty", "warning");
    }
    setValue("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter New Note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

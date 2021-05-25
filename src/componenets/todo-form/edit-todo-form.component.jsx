import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "../../hooks/useInputState";

const EditTodo = ({ id, task, edit, toggle }) => {
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();

    edit(id, value);
    reset();
    toggle();
  };

  return (
    <form style={{ width: "50%", marginLeft: "1rem" }} onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodo;

import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "../../hooks/useInputState";
import { TodosContext } from "../../context/todos.context";

const EditTodo = ({ id, task, toggle }) => {
  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(id, value);
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

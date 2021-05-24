import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";
import useInputState from "../../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} />
        <Button type="submit">Add Task</Button>
      </form>
    </Paper>
  );
};

export default TodoForm;

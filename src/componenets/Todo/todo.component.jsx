import React, { useContext } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons/";
import useToggleState from "../../hooks/useToggleState";
import EditTodo from "../todo-form/edit-todo-form.component";
import { TodosContext } from "../../context/todos.context";

const Todo = ({ id, task, completed }) => {
  const [isEditing, toggleEditing] = useToggleState(false);
  const { toggleTodo, removeTodo } = useContext(TodosContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodo task={task} id={id} toggle={toggleEditing} />
      ) : (
        <>
          <Checkbox
            onClick={() => toggleTodo(id)}
            tabIndex={-1}
            checked={completed}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => removeTodo(id)} aria-label="Delete">
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleEditing}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;

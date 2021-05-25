import React from "react";
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

const Todo = ({ id, task, completed, remove, toggle, edit }) => {
  const [isEditing, toggleEditing] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodo task={task} id={id} edit={edit} toggle={toggleEditing} />
      ) : (
        <>
          <Checkbox
            onClick={() => toggle(id)}
            tabIndex={-1}
            checked={completed}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => remove(id)} aria-label="Delete">
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

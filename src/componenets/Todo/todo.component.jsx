import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons/";

const Todo = ({ id, task, completed, remove, toggle }) => {
  return (
    <ListItem>
      <Checkbox onClick={() => toggle(id)} tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => remove(id)} aria-label="Delete">
          <Delete />
        </IconButton>
        <IconButton aria-label="Edit">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;

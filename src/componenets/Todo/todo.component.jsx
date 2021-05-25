import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons/";

const Todo = ({ task, completed }) => {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
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

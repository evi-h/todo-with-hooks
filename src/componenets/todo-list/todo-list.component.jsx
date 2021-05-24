import React from "react";
import {
  List,
  Paper,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;

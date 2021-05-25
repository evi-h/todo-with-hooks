import React from "react";
import { List, Paper, Divider } from "@material-ui/core";
import Todo from "../Todo/todo.component";

const TodoList = ({ todos, remove, toggle, edit }) => {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                remove={remove}
                toggle={toggle}
                edit={edit}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;

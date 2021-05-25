import React, { useContext } from "react";
import { List, Paper, Divider } from "@material-ui/core";
import Todo from "../Todo/todo.component";
import { TodosContext } from "../../context/todos.context";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;

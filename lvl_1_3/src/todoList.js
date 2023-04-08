import { todos } from "./data/todoData";

const TodoList = () => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <div
            className="todo-container"
            style={{ backgroundColor: todo.inProgress ? "#bee3f8" : "" }}
          >
            <li>{todo.completed ? todo.todo : <del>{todo.todo}</del>}</li>
            <li>{todo.icon}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;

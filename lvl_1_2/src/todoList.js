import tasks from "./data/tasks";
import TodoItem from "./todoItem";

const TodoList = () => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <TodoItem task={task} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;

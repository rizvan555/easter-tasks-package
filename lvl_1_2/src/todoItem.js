const TodoItem = ({ task }) => {
  return (
    <div className="todo-list">
      <input type="checkbox" checked={task.completed} />
      <span>{task.task}</span>
    </div>
  );
};

export default TodoItem;

import TaskList from '../../styles/Row';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <TaskList>
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
     ))}
    </TaskList>
  );
};

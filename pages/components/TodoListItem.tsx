import Label from "../../styles/LableCursor"
import Line from "../../styles/Line"
import RowInput from "../../styles/RowInput"

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
  return (
    <Line>
      <Label className={todo.complete? "completed" : ""}>
      <RowInput
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        />
        {todo.text}
      </Label>
    </Line>
  )
}

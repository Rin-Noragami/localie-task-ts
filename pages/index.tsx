import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ThemeProvider } from "styled-components";
import { myTheme } from '../styles/Color-theme';
import AppTodostyle from '../styles/AppToDo';
import Title from '../styles/Title';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <AppTodostyle>
        <Title>
        Task list
        </Title>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
      </AppTodostyle>
    </ThemeProvider>
  );
};

export default App;
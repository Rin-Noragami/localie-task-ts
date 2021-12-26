import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../../styles/Button';
import Form from '../../styles/Form';
import Inputstyle from '../../styles/Inputstyle';


interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <Form className="todo-form">
      <Inputstyle type="text" value={newTodo} placeholder="Enter a new task" onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit}>
          Create
        </Button>
    </Form>
  )
};

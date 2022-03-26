import React from 'react';
import './App.css';
import { TodoCounter } from './componets/TodoCounter';
import { TodoSearch } from './componets/TodoSearch';
import { TodoList } from './componets/TodoList';
import { CreateTodoButton } from './componets/CreateTodoButton';
import { TodoItem } from './componets/TodoItem';


const todos = [
  { id: 'hash', text: 'Bañarme.', completed: false },
  { id: 'hash1', text: 'Acompañar a Kei y comprar algo de ropa.', completed: false },
  { id: 'hash2', text: 'Ir a conocer al tío de Kei.', completed: false },
];

function App() {
  return (

    <>
      <TodoCounter /> 
      <TodoSearch /> 
      <TodoList>
        {
          todos.map( todo => (
            <TodoItem key={todo.id} text={todo.text} completed={todo.completed} id={todo.id}/>
          ))
              
        }
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from './componets/TodoCounter';
import { TodoSearch } from './componets/TodoSearch';
import { TodoList } from './componets/TodoList';
import { CreateTodoButton } from './componets/CreateTodoButton';
import { TodoItem } from './componets/TodoItem';


const defaultTodos = [
  { id: 'hash', text: 'Bañarme.', completed: true },
  { id: 'hash1', text: 'Acompañar a Kei y comprar algo de ropa.', completed: false },
  { id: 'hash2', text: 'Ir a conocer al tío de Kei.', completed: false },
];

function App() {
  
  const [ search, setSearch ] = useState('');
  const [ todos, setTodos ] = useState(defaultTodos);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let todoSearch = []; 
  if (search.length >= 1){
    todoSearch = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));
  } else {
    todoSearch = todos;
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodoList = [...todos];
    newTodoList[todoIndex].completed = true;
    setTodos(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter(todo => todo.id.toString() !== id.toString());
    setTodos(newTodoList);
  };

  return (

    <>
      <TodoCounter
        completed={ completedTodos }
        total={ totalTodos }
      /> 
      <TodoSearch 
        search={ search }
        setSearch= { setSearch }
      /> 
      <TodoList>
        {
          todoSearch.map( todo => (
            <TodoItem key={todo.id} 
                      text={todo.text} 
                      completed={todo.completed} 
                      id={todo.id} 
                      onComplete={() => completeTodo(todo.id)} 
                      onDelete={() => deleteTodo(todo.id)} 
            />
          ))    
        }
      </TodoList>
      <CreateTodoButton 
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;

import React from 'react';
import './TodoSearch.css';

function TodoSearch({ search, setSearch }) {

    const onSearchChangeValue = (event) => {
        setSearch(event.target.value);
    };
    
    return (
        <input className="todo-search"
             type='text' 
             placeholder='Find your To-Do'
             onChange = { onSearchChangeValue }
             value= { search }
        >
             
        </input>
    );
}

export { TodoSearch }
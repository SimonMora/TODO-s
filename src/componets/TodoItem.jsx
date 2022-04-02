import React from 'react';

function TodoItem(props) {
    
    return (
        <li>
            <span className='complete-todo' onClick={ props.onComplete }>{props.completed.toString()}</span>
            <p className='li-texto'>{props.text}</p>
            <span className='delete-todo' onClick={ props.onDelete }>{props.id}</span>
        </li>
    );
}

export { TodoItem }
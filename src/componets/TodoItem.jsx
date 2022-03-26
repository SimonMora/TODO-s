import React from 'react';

function TodoItem(props) {
    return (
        <li>
            <span>{props.completed.toString()}</span>
            <p className="li-texto">{props.text}</p>
            <span>{props.id}</span>
        </li>
    );
}

export { TodoItem }
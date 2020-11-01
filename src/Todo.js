import React from 'react';
import {Button} from 'reactstrap';

function Todo(props) {

    const {todo} = props;
    const {done} = todo;

    const style = {
        'textDecoration': 'line-through',
    };

    const isDone = done ? style : {};

    return (

        <div style={isDone}>
            <Button disabled={props.isFirst} onClick={() => props.moveTodo(props.index, props.index - 1)}>Up</Button>
            <Button disabled={props.isLast} onClick={() => props.moveTodo(props.index, props.index + 1)}>Down</Button>
            {todo.title}
            <Button onClick={() => props.deleteTodo(todo.id)}>Delete</Button>
        </div>
    );
}

export default Todo;

import React, {useState} from 'react';
import {Button, Card, CardBody, CardTitle} from 'reactstrap';
import ModalDeleteTodo from "./ModalDeleteTodo";
import ModalEditTodo from "./ModalEditTodo";

function Todo(props) {

    const {todo = {}} = props;
    const {done = {}} = todo;

    const [isDoneMode, setDoneMode] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const updateButtonHandler = () => {
        props.updateTodo(todo.id)
        setDoneMode(!isDoneMode);
    }

    const style = {
        'textDecoration': 'line-through',
    };

    const isDone = done ? style : {};

    return (
        <Card>

        <ModalDeleteTodo
            todo={todo}
            isDeleteMode={isDeleteMode}
            setIsDeleteMode={setIsDeleteMode}
            deleteTodo={props.deleteTodo}
        />

        <ModalEditTodo
            todo={todo}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            editTodo={props.editTodo}
        />

        <CardBody>

        <div style={isDone}>
            <CardTitle>
            {todo.title} {todo.status}
            </CardTitle>
            <Button disabled={props.isFirst} onClick={() => props.moveTodo(props.index, props.index - 1)}>Up</Button>
            <Button disabled={props.isLast} onClick={() => props.moveTodo(props.index, props.index + 1)}>Down</Button>
            <br/>
            <Button onClick={updateButtonHandler}>Update</Button>
            <Button onClick={() => setIsDeleteMode(!isDeleteMode)}>Delete</Button>
            <Button onClick={() => setIsEditMode(!isEditMode)}>Edit</Button>
        </div>
        </CardBody>

        </Card>
    );
}

export default Todo;

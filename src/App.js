import React, {useState} from "react";
import {Container, Row} from "reactstrap";
import List from "./List";
import Controller from "./Controller";

function App() {

    const uniqid = require('uniqid');

    const initialState = [
        {id: uniqid('_id'), title: 'Learn HTML', done: false},
        {id: uniqid('_id'), title: 'Learn CSS', done: false},
        {id: uniqid('_id'), title: 'Learn JS', done: false},
        {id: uniqid('_id'), title: 'Learn React', done: false},
    ];

    const [list, setList] = useState(initialState);

    const addTodo = (value, status= false) => {
        status = status === 'true';
        const newTodo = {
            id: uniqid('_id'),
            title: value,
            done: status,
        }
        const newList = [...list, newTodo];
        setList(newList)
    }

    const deleteTodo = (id) => {
        const newList = list.filter(el => el.id !== id);
        setList(newList)
    }

    const moveTodo = (currentIndex, nextIndex) => {
        const newList = [...list];
        const currentEl = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentEl;
        setList(newList);
    }

    return (
        <Container>
            <Row className='d-flex flex-column justify-content-center'>
                <Controller
                    addTodo={addTodo}
                />
                <List
                    list={list}
                    deleteTodo={deleteTodo}
                    moveTodo={moveTodo}
                />
            </Row>
        </Container>
    );
}

export default App;

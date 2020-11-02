import React, {useState} from "react";
import {Container, Row} from "reactstrap";
import List from "./List";
import Controller from "./Controller";
import statuses from "./statuses";

function App() {

    const uniqid = require('uniqid');

    const initialState = [
        {id: uniqid('_id'), title: 'Learn HTML', status: statuses[0]},
        {id: uniqid('_id'), title: 'Learn CSS', status: statuses[1]},
        {id: uniqid('_id'), title: 'Learn JS', status: statuses[2]},
        {id: uniqid('_id'), title: 'Learn React', status: statuses[3]},
    ];

    const [list, setList] = useState(initialState);

    const addTodo = (newValue, newStatus = false) => {
        // newStatus = newStatus === 'true';
        const newTodo = {
            id: uniqid('_id'),
            title: newValue,
            status: newStatus,
        }
        const newList = [...list, newTodo];
        setList(newList)
    }

    const deleteTodo = (id) => {
        const newList = list.filter(el => el.id !== id);
        setList(newList)
    }

    const editTodo = (id, newValue, newStatus = false) => {
        // newStatus = newStatus === 'true';
        const newList = list.map(el => {
            if (el.id === id) return {...el, title: newValue, done: newStatus}
            return el;
        })
        setList(newList)
    }

    const moveTodo = (currentIndex, nextIndex) => {
        const newList = [...list];
        const currentEl = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentEl;
        setList(newList);
    }

    const updateTodo = (id) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, done: !el.done};
            return el;
        })
        setList(newList);
    }

    return (
        <Container>
            <Row className='d-flex justify-content-between justify-items-stretch'>
                <Controller
                    addTodo={addTodo}
                />
                {statuses.map(el =>
                    <List
                        status={el}
                        list={list}
                        deleteTodo={deleteTodo}
                        moveTodo={moveTodo}
                        updateTodo={updateTodo}
                        editTodo={editTodo}
                    />
                )}
            </Row>
        </Container>
    );
}

export default App;

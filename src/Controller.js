import React, {useState} from "react";
import {Container, Col, Button} from "reactstrap";
import ModalAppTodo from "./ModalAddTodo";

function Controller(props) {

    const [modal, setModal] = useState(false);

    const addTodo = () => {
        setModal(!modal);
    }

    return (

        <Container>
            <Col>
            <ModalAppTodo
                modal={modal}
                addTodo={props.addTodo}
                setModal={setModal}
            />

            <Button onClick={addTodo}>Add New Todo</Button>

            </Col>
        </Container>
    );
}

export default Controller;

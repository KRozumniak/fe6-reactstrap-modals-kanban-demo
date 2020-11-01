import React, {useState} from "react";
import {Container, Button} from "reactstrap";
import ModalAppTodo from "./ModalAddTodo";

function Controller(props) {

    const [modal, setModal] = useState(false);

    const addTodo = () => {
        setModal(!modal);
    }

    return (

        <Container>
            <ModalAppTodo
                modal={modal}
                addTodo={props.addTodo}
                setModal={setModal}
            />

            <Button onClick={addTodo}>Add Todo</Button>
        </Container>
    );
}

export default Controller;

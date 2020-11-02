import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter, Input, Button, Label} from "reactstrap";

function ModalDeleteTodo(props) {

    const [inputValue, setInputValue] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const deleteButtonHandler = () => {
        props.deleteTodo(props.todo.id);
        props.setIsDeleteMode(false);
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value)
        validate()
    }

    const validate = () => {
        if (inputValue === props.todo.title) setButtonDisabled(false);
        else setButtonDisabled(true)
    }

    return (
        <div>
            <Modal isOpen={props.isDeleteMode}>
                <ModalHeader>Type <b>{props.todo.title}</b> to delete</ModalHeader>
                <ModalBody>

                    <Input
                        type="text"
                        value={inputValue}
                        onChange={inputHandler}
                    />

                </ModalBody>
                <ModalFooter>

                    <Button disabled={buttonDisabled} onClick={deleteButtonHandler}>Delete</Button>
                    <Button onClick={() => props.setIsDeleteMode(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalDeleteTodo;
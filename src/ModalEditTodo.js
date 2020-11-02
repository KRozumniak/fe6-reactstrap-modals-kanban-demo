import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from "reactstrap";

function ModalEditTodo(props) {

    const [inputValue, setInputValue] = useState(props.todo.title);
    const [statusSelectValue, setStatusSelectValue] = useState(false);

    const editButtonHandler = () => {
        props.editTodo(props.todo.id, inputValue, statusSelectValue);
        props.setIsEditMode(false);
    }

    const selectEditHandler = (e) => {
        setStatusSelectValue(e.target.value)
    }

    return (
        <div>
            <Modal isOpen={props.isEditMode}>
                <ModalHeader>Edit <b>{props.todo.title}</b></ModalHeader>
                <ModalBody>
                    <Label>New title</Label>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <Label>New status</Label>
                    <Input
                        type="select"
                        value={statusSelectValue}
                        onChange={selectEditHandler}>
                        <option value={true}>Done</option>
                        <option value={false}>Not done</option>
                    </Input>



                </ModalBody>
                    <ModalFooter>
                        <Button onClick={editButtonHandler}>Save</Button>
                        <Button onClick={() => props.setIsEditMode(false)}>Cancel</Button>
                    </ModalFooter>

            </Modal>
        </div>
    );
}

export default ModalEditTodo;
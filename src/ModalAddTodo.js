import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter, Input, Button, Label} from "reactstrap";

function ModalAppTodo(props) {

    const [inputValue, setInputValue] = useState('');
    const [statusSelectValue, setStatusSelectValue] = useState(false);

    const saveButtonHandler = () => {
        props.addTodo(inputValue, statusSelectValue);
        props.setModal(false);
    }

    const selectHandler = (e) => {
        setStatusSelectValue(e.target.value)
    }

    return (
        <div>
            <Modal isOpen={props.modal}>
                <ModalHeader>Add new Todo</ModalHeader>
                <ModalBody>

                    <Label>Title</Label>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <Label>Status</Label>
                    <Input
                        type="select"
                        value={statusSelectValue}
                        onChange={selectHandler}>
                        <option value={true}>Done</option>
                        <option value={false}>Not done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>

                    <Button onClick={saveButtonHandler}>Save</Button>
                    <Button onClick={() => props.setModal(!props.modal)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalAppTodo;

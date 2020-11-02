import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter, Input, Button, Label} from "reactstrap";
import statuses from "./statuses";

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
                        onChange={selectHandler}>
                        {statuses.map(el => <option key={el} value={el}>{el}</option>)}
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

import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter, Input, Button, Label} from "reactstrap";

function ModalDeleteTodo(props) {

    const [inputValue, setInputValue] = useState('');
    const [buttonDisable, setButtonDisable] = useState(false);

    return (
        <div>
            <Modal isOpen={props.isDeleteMode}>
                <ModalHeader>Delete {props.todo}?</ModalHeader>
                <ModalBody>

                    <Label>Title</Label>
                    <Input
                        type="text"
                    />

                    <Label>Status</Label>
                    <Input
                        type="select">
                        <option value={true}>Done</option>
                        <option value={false}>Not done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>

                    <Button>Delete</Button>
                    <Button>Calcel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalDeleteTodo;
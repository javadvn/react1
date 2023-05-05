import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

function MyModal({ toggle, modal, editProduct, editProductFunc }) {
    const [editProductObj, setEditProductObj] = useState({})
    useEffect(() => {
        setEditProductObj(editProduct)
    }, [editProduct])

    return (
        <div>
            <Modal
                isOpen={modal}
                modalTransition={{ timeout: 500 }}
                backdropTransition={{ timeout: 1300 }}
                toggle={toggle}

            >

                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="ProductName">
                                Product Name
                            </Label>
                            <Input
                                id='ProductName'
                                name="ProductName"
                                type="text"
                                value={editProductObj?.name}
                                onChange={(e) => setEditProductObj({ ...editProductObj, name: e.target.value.trim() })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ProductPrice">
                                ProductPrice
                            </Label>
                            <Input
                                id="ProductPrice"
                                name="ProductPrice"
                                type="text"
                                value={editProductObj?.price}
                                onChange={(e) => setEditProductObj({ ...editProductObj, price: e.target.value.trim() })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Count">
                                Count
                            </Label>
                            <Input
                                id="Count"
                                name="Count"
                                type="text"
                                value={editProductObj?.count}
                                onChange={(e) => setEditProductObj({ ...editProductObj, count: e.target.value.trim() })}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { editProductFunc(editProductObj); toggle(false) }}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={() => toggle(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}



export default MyModal;
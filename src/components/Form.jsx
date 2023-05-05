import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function MyForm({ addProducts }) {
    const data = {
        name: "",
        price: "",
        count: ""
    }
    const [productObj, setProductObj] = useState(data)


    return (
        <Form>
            <FormGroup>
                <Label for="ProductName">
                    Product Name
                </Label>
                <Input
                    id='ProductName'
                    name="ProductName"
                    type="text"
                    value={productObj.name}
                    onChange={(e) => setProductObj({ ...productObj, name: e.target.value.trim() })}
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
                    value={productObj.price}
                    onChange={(e) => setProductObj({ ...productObj, price: e.target.value.trim() })}
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
                    value={productObj.count}
                    onChange={(e) => setProductObj({ ...productObj, count: e.target.value.trim() })}
                />
            </FormGroup>
            <Button
                color="primary"
                onClick={() => { addProducts(productObj); setProductObj(data) }}
                disabled={!productObj.name || !productObj.price || !productObj.count}
            >
                Add
            </Button>
        </Form>
    )
}

export default MyForm
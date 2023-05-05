import React from 'react'
import { Col, Form, FormGroup, Input } from 'reactstrap'

function SearchProduct({ searchProduct }) {
  return (
    <>
      <Form style={{ marginBottom: 50 }}>
        <FormGroup row>
          <Col sm={10}>
            <Input
              id="Search"
              name="Search"
              placeholder="Search ... "
              type="text"
              onChange={(e) => { searchProduct(e.target.value.trim()) }}
            />
          </Col>
        </FormGroup>
      </Form>
    </>
  )
}

export default SearchProduct
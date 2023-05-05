import React from 'react'
import { Button, Table } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';
function ProductTables({ products, deleteProduct, toggle, setEditProduct }) {
    return (
        <Table
        >
            <thead>
                <tr>
                    <th>
                        Product
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Count
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.length > 0 ? products.map(item => {
                        return (
                            <tr key={uuidv4}>
                                <td scope="row">
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    {item.count}
                                </td>
                                <td>
                                    <Button color="danger" onClick={(e) => deleteProduct(item.name)}>
                                        Delete
                                    </Button>
                                </td>
                                <td>
                                    <Button color="warning" onClick={() => { setEditProduct(item); toggle(true) }}>
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                        )
                    }) :
                        <tr><td colSpan={3} style={{ textAlign: "center", fontSize: 30 }}>Don't Product</td></tr>
                }

            </tbody>
        </Table>

    )
}

export default ProductTables
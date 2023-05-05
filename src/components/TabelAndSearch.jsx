import React from 'react'
import SearchProduct from './SearchProduct'
import ProductTables from './ProductTables'

function TabelAndSearch({ products,deleteProduct,setModal ,toggle,searchProduct,setEditProduct}) {
    return (
        <div>
            <SearchProduct searchProduct={searchProduct}/>
            <ProductTables products={products} deleteProduct={deleteProduct} setModal={setModal} toggle={toggle} setEditProduct={setEditProduct}/>
        </div>
    )
}

export default TabelAndSearch
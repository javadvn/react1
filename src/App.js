import { Col, Row } from "reactstrap";
import MyForm from "./components/Form";
import { useRef, useState } from "react";
import TabelAndSearch from "./components/TabelAndSearch";
import MyModal from "./components/Modal";

function App() {
  let data = useRef([])
  const [products, setProducts] = useState(data.current);
  const [modal, setModal] = useState(false);
  const [editProduct, setEditProduct] = useState([])

  const addProducts = (paramsObj) => {
    let checkProduct = products.find(item => item.name == paramsObj.name);
    if (checkProduct) {
      alert("This product has an artique !!!");
      return 0
    }
    data.current = [...products, paramsObj]
    setProducts([...products, paramsObj])
  }

  const deleteProduct = (paramsValue) => {
    setProducts(products.filter(x => x.name !== paramsValue))
  }

  const searchProduct = (paramsValue) => {
    setProducts(data.current.filter(item => item.name.includes(paramsValue)))
  }

  const editProductFunc = (paramsValue) => {
    let editProductFind = products.find(x => x.name == editProduct.name);
    editProductFind.name = paramsValue.name;
    editProductFind.price = paramsValue.price;
    editProductFind.count = paramsValue.count;
  }


  const toggle = (value) => {
    setModal(value);
  };
  return (
    <>
      <Row style={{ justifyContent: "space-between", padding: 50 }}>
        <Col md={5}>
          <MyForm addProducts={addProducts} />
        </Col>
        <Col md={5}>
          <TabelAndSearch products={products} deleteProduct={deleteProduct} toggle={toggle} searchProduct={searchProduct} setEditProduct={setEditProduct} />
        </Col>
        <MyModal toggle={toggle} modal={modal} editProduct={editProduct} editProductFunc={editProductFunc} />
      </Row>

    </>
  );
}

export default App;

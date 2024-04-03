import React, { useEffect } from "react";
import { Container, Col, Row, Button, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { productAction } from "../redux/actions/productAction";
import { fetchProductDetail } from "../redux/reducers/productSlice";

const ProductDetail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectItem);

  const getProductDetail = async () => {
    dispatch(fetchProductDetail(id));
  };
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="detail-img">
          <img src={product?.img} />
        </Col>

        <Col className="product-box">
          <div>{product?.title}</div>
          <div>₩ {product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

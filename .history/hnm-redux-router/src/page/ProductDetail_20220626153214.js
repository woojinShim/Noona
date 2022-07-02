import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://localhost:5000/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img}></img>
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

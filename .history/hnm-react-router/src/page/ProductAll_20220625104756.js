import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Container } from "react-bootstrap";

export const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row></Row>
      </Container>
      <ProductCard />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

export const ProductAll = () => {
  const productList = useSelector((state) => state.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    dispatch(productAction.getProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

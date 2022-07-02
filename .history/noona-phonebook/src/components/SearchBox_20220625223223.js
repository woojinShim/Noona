import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const SearchBox = () => {
  return (
    <Row>
      <Col>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col></Col>
    </Row>
  );
};

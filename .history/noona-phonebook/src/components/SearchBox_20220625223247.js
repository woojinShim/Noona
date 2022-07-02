import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const SearchBox = () => {
  return (
    <Row>
      <Col>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col>
        <Button>찾기</Button>
      </Col>
    </Row>
  );
};

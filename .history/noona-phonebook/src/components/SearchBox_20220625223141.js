import React from "react";
import { Form, Button } from "react-bootstrap";

export const SearchBox = () => {
  return (
    <Row>
      <Form.Control type="text" placeholder="이름을 입력해주세요" />
    </Row>
  );
};

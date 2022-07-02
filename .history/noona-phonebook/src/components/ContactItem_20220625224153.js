import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
        />
      </Col>
      <Col>
        <div>김빛나</div>
        <div>0102131654984</div>
      </Col>
    </Row>
  );
};

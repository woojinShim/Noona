import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요" />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

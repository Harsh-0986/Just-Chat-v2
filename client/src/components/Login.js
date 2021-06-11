import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import { v4 as uuidV4 } from "uuid";
const short = require("short-uuid");

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(short.generate());
  }

  return (
    <div>
      <Container
        className="align-items-center d-flex"
        style={{ height: "100vh" }}
      >
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group>
            <Form.Label>Enter your ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Button type="submit" classsName="mr-2">
            Login
          </Button>
          <Button onClick={createNewId} variant="secondary" className="m-2">
            Create a new ID
          </Button>
        </Form>
      </Container>
    </div>
  );
}

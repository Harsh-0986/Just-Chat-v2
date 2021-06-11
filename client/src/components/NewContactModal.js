import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function NewContactModal({ closeModal }) {
  function handleSubmit(e) {
    e.preventDefault();

    // createContact(idRef.current.value, nameref.current.value)
    closeModal();
  }

  const idRef = useRef();
  const nameRef = useRef();
  return (
    <>
      <Modal.Header>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit">Create Contact</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

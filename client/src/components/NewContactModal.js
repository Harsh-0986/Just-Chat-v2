import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }

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
          <div class="w-100 align-items-center justify-content-center">
            <Button
              type="submit"
              className="mt-3 align-items-center justify-content-center"
              style={{ width: "60vw" }}
            >
              Create Contact
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
}

import React, { useState } from "react";
import { Tab, Nav, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import { Button } from "react-bootstrap";
import NewContactModal from "./NewContactModal";
import NewConverstaionModal from "./NewConversationModal";
import "../styles.css";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;
  const url = window.location.href;
  const copyUrl = "Follow this link to join me on Just-Chat \n" + url + id;

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link
              eventKey={CONVERSATIONS_KEY}
              style={{ fontFamily: "Mate SC, serif" }}
            >
              Conversations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey={CONTACTS_KEY}
              style={{ fontFamily: "Mate SC, serif" }}
            >
              Contacts
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border border-bottom-0 border-top-0  border-right-0 overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>

          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border border-top border-left-0 small align-items-center w-100">
          Your ID: <span className="text-muted">{id}</span>
        </div>
        <Button
          // style={{ width: "27vw" }}
          className="m-2 w-70"
          variant="secondary"
          onClick={() => navigator.clipboard.writeText(id)}
          style={{ fontFamily: "Viaoda Libre, cursive" }}
        >
          Copy Your ID
        </Button>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConverstaionModal closeModal={closeModal}></NewConverstaionModal>
        ) : (
          <NewContactModal closeModal={closeModal}></NewContactModal>
        )}
      </Modal>
    </div>
  );
}

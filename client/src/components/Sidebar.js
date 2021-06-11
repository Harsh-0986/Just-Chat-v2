import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import { Button } from "react-bootstrap";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
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
        <div className="p-2 border border-top border-left-0 small align-items-center">
          Your ID: <span classsName="text-muted">{id}</span>
          <Button
            style={{ width: "27vw" }}
            className="m-2"
            variant="secondary"
            onClick={() => navigator.clipboard.writeText(id)}
          >
            Copy Your ID
          </Button>
        </div>
        <Button className="rounded-0">
          New {conversationsOpen ? "Coversation" : "Contact"}
        </Button>
      </Tab.Container>
    </div>
  );
}

import React, { useState, useEffect } from "react";

import ContactForm from "../components/ContactFrom";
import TileList from "../components/TileList";

export default function ContactsPage({ contacts, addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isCopy, setIsCopy] = useState(false);

  // Checking for name duplicates
  useEffect(() => {
    for (const contact of contacts) {
      if (name === contact.name) {
        setIsCopy(true);
      } else {
        setIsCopy(false);
      }
    }
  }, [name]);

  // Adds a new contact given the name is not a duplicate
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCopy) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
}

import React, { useState } from "react";

import ContactForm from "../components/ContactFrom";
import TileList from "../components/TileList";

export default function ContactsPage(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isCopy, setIsCopy] = useState(false);

  // Checking for name duplicates
  useEffect(() => {
    for (contact of props.contacts) {
      if (name === contact.name) {
        setIsCopy(true);
      } else {
        ssetIsCopy(false);
      }
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList />
      </section>
    </div>
  );
}

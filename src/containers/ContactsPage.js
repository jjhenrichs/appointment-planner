import React, { useState } from "react";

import ContactForm from "../components/ContactFrom";
import TileList from "../components/TileList";

export default function ContactsPage() {
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

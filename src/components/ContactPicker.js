import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <div>
      <select onChange={({ target }) => setContact(target.value)} required>
        <option defaultValue="selected" key={-1}>
          No Contact Selected
        </option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </div>
  );
};

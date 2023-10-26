import React from "react";

import { ContactPicker } from "./ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export default function AppointmentForm({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required
      />
      <label htmfor="contact">Contacts:</label>
      <ContactPicker
        contacts={contacts}
        setContact={setContact}
        name="contact"
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        min={getTodayString()}
        value={date}
        onChange={({ target }) => setDate(target.value)}
        required
      />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={({ target }) => setTime(target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

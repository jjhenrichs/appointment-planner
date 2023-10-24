import React from "react";

export default function ContactForm({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        label="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        required
      />
      <br />
      <label htmlFor="phone">Phone: </label>
      <input
        type="tel"
        aria-label="phone"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
        patten="(\d{3})-(\d{3})-(\d{4})"
        required
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        aria-label="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

import React from "react";

export default function Tile({ id, name, description }) {
  return (
    <div className="contact" id={`contact-${id}`}>
      <p className="tile_title">{name}</p>
      <p className="tile_phone">{description.phone}</p>
      <p className="tile_email">{description.email}</p>
    </div>
  );
}

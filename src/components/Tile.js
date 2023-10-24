import React from "react";

export default function Tile({ key, name, description }) {
  return (
    <div class="contact" id={key}>
      <p class="tile_title">{name}</p>
      <p class="tile_phone">{description.phone}</p>
      <p class="tile_email">{description.email}</p>
    </div>
  );
}

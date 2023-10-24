import React from "react";
import Tile from "./Tile";

export default function TileList({ contacts }) {
  return (
    <div>
      {contacts.map((contact, item) => {
        const { name, ...description } = contact;
        return <Tile key={item} name={name} description={description} />;
      })}
    </div>
  );
}

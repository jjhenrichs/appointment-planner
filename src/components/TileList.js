import React from "react";
import Tile from "./Tile";

export default function TileList({ tiles }) {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
}

import React from "react";

export default ({ on, handleClick }) => (
  <h1 onClick={handleClick}>Hello {on ? "Render Prop" : "World"}!</h1>
);

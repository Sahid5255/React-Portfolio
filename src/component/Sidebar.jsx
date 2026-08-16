import React from "react";

export default function Sidebar({ setIsOpen }) {
  return (
    <aside className="Sidebar">

      <button
        className="Sidebar__close"
        onClick={() => setIsOpen(false)}
      >
        ❌
      </button>

      <ul className="Sidebar__menu">
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

    </aside>
  );
}

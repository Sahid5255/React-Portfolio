import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    console.log("clicked");
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="Navbar">
      <h1>My Logo</h1>

      <ul>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <img
        onClick={handleSidebar}
        src="https://cdn-icons-png.flaticon.com/128/10495/10495741.png"
        alt="hamburger"
      />

      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    </div>
  );
}

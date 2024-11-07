import React from 'react';

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Contact", path: "/contact" }
  ];
function Nav() {
  return(
    <nav>
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  </nav>
      );
}

export default Nav;
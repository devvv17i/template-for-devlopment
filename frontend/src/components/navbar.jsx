import React from 'react';


const Navbar = () => {
  return (
    <ul className="menu cf">
      <li><a href="#">Home</a></li>
      <li>
        <a href="#">Services</a>
        <ul className="submenu">
          <li><a href="#">Web design</a></li>
          <li><a href="#">Graphics design</a></li>
          <li><a href="#">App development</a></li>
          <li><a href="#">Marketing</a></li>
        </ul>
      </li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  );
};

export default Navbar;

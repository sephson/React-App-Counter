import React, { Component } from "react";

//stateless functional component
const Navbar = ({ totalCounter }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Navbar</span>
      </div>
      <span className="badge badge-pill badge-secondary">{totalCounter}</span>
    </nav>
  );
};

export default Navbar;

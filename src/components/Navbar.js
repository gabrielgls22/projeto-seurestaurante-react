import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-brand">
          <h1>Meu App</h1>
        </div>
        <div className="navbar-menu">
          <button className="navbar-toggler">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

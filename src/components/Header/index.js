import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Omar Valdivia-Samudio</h1>
        </Link>

        <nav>
          <Link to="/Contact">Contact me</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Resume"></Link>
          <Link to="/">Home Page</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Connexion
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
            Inscription
          </NavLink>
        </li>
        <li>
          <NavLink to="/testapi" className={({ isActive }) => isActive ? "active" : ""}>
            Test API
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

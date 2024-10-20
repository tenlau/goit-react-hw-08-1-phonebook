// src/components/Navigation/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
  </nav>
);

export default Navigation;

import React from 'react';
import{NavLink} from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact>Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active" exact>Help </NavLink>
    </header>
);

export default Header;
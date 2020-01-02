import React from 'react';
import{NavLink} from 'react-router-dom';
const PortfolioPage = () => (
    <div>
       This is my portfolio page
       <NavLink to="/portfolio/1" activeClassName="is-active" exact> Project 1</NavLink>
       <NavLink to="/portfolio/2" activeClassName="is-active" exact> Project 2</NavLink>
    </div>
);

export default PortfolioPage;

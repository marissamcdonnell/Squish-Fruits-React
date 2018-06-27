import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className = "header">
        <div className = "container">
            <div className = "yellow-header">
                <h2 className = "title">Squish Fruit</h2>
            </div>
            <div className = "nav">
                <ul>
                  <li className = "home"><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                  <li className = "fruits"><NavLink to="/fruits" activeClassName="is-active">Fruits</NavLink></li>
                  <li className = "about"><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
                </ul>
             </div>
        </div>
    </div>
);

export default Header

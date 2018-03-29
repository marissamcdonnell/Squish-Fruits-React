import React from 'react';

const Header = () => (
    <div className = "header">
        <div className = "container">
            <div className = "yellow-header">
                <h2 className = "title">Squish Fruit</h2>
            </div>
            <div className = "nav">
                <ul>
                  <li className = "home"><a className = "active" href = "index.html">Home</a></li>
                  <li className = "fruits"><a href = "fruits.html">Fruits</a></li>
                  <li className = "about"><a href = "about.html">About</a></li>
                </ul>
             </div>
        </div>
    </div>
);

export default Header

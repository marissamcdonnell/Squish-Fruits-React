import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Squish Fruit</h2>
      </div>
      <div className={styles.nav}>
        <ul>
          <li className={styles.home} key="home">
            <NavLink to="/" activeClassName={styles.active} exact={true}>
              Home
            </NavLink>
          </li>
          <li className={styles.fruit} key="fruit">
            <NavLink to="/fruits" activeClassName={styles.active}>
              Fruits
            </NavLink>
          </li>
          <li className={styles.about} key="about">
            <NavLink to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header

import React from 'react'

import bowl from '../../images/greenbowl.png'
import styles from './AboutPage.module.scss'

const AboutPage = () => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <img src={bowl} className={styles.bowl} />
      <h3>A Little About Us</h3>
      <p>
        Thank you for checking out Squish Fruits! This website is an upgrade
        from the original Squish Fruits website to showcase React, React-Router,
        Redux, and Scss.
      </p>
      <p>We hope you enjoyed our little game as much as we did creating it.</p>
    </div>
  </div>
)

export default AboutPage

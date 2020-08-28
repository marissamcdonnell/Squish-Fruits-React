import React from 'react'

import squishFruit from '../../images/squish1.png'
import squishFruit2 from '../../images/squish2.png'
import squishFruit3 from '../../images/squish3.png'
import styles from './SquishedFruit.module.scss'

const SquishedFruit = () => (
  <>
    <img className={styles.squishFruit} src={squishFruit} id="squishFruit" />
    <img className={styles.squishFruit2} src={squishFruit2} id="squishFruit2" />
    <img className={styles.squishFruit3} src={squishFruit3} id="squishFruit3" />
  </>
)

export default SquishedFruit

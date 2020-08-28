import React, { useEffect } from 'react'
import anime from 'animejs'

import bowl from '../../images/greenbowl.png'
import frontBowl from '../../images/frontbowl.png'
import backBowl from '../../images/backbowl.png'
import SquishedFruit from '../SquishedFruit/SquishedFruit'
import styles from './Bowls.module.scss'

const Bowls = ({ fruitList, addFruits, className }) => {
  useEffect(() => {
    if (addFruits) {
      anime({
        targets: '#bowlLeft',
        translateX: 33,
        translateY: 173,
        duration: 4000,
        rotate: {
          value: 40,
          duration: 3000,
          easing: 'easeInOutSine',
        },
      })

      anime({
        targets: '#bowlMiddle',
        translateX: 12,
        translateY: 221,
        delay: 400,
        duration: 4000,
      })
      anime({
        targets: '#bowlRight',
        translateX: -8,
        translateY: {
          value: 178,
          duration: 5000,
          delay: 800,
        },
        rotate: {
          value: -60,
          duration: 4000,
          easing: 'easeInOutSine',
        },
      })
    }
  }, [addFruits])

  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      <SquishedFruit />
      <img
        src={fruitList.length >= 1 ? fruitList[0].url : bowl}
        alt="bowl"
        className={styles.bowlLeft}
        id="bowlLeft"
      />
      <img
        src={fruitList.length >= 2 ? fruitList[1].url : bowl}
        alt="bowl"
        className={styles.bowlMiddle}
        id="bowlMiddle"
      />
      <img
        src={fruitList.length >= 3 ? fruitList[2].url : bowl}
        alt="bowl"
        className={styles.bowlRight}
        id="bowlRight"
      />
      <img
        src={frontBowl}
        alt="bowl"
        className={styles.bigBowl}
        style={{ zIndex: 10 }}
      />
      <img src={backBowl} alt="bowl" className={styles.bigBowl} />
    </div>
  )
}

export default Bowls

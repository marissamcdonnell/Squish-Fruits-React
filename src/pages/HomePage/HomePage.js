import React, { useState } from 'react'
import List from '../../ui/List/List'
import { Link } from 'react-router-dom'

import styles from './HomePage.module.scss'

const HomePage = () => {
  const [showList, setShowList] = useState(false)

  const handleList = () => {
    setShowList((s) => !s)
  }

  return (
    <div className={styles.container}>
      {!showList ? (
        <div className={styles.yellowBox}>
          <div className={styles.innerContainer}>
            <h1>Welcome to Squish Fruit</h1>
            <h3>Squishing fruit is our thing!</h3>
            <p>
              Click below to see a list of all of the available fruit to squish!
            </p>
            <button onClick={() => handleList()} id="sideFruits">
              Fruits!
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.yellowBox}>
            <div className={styles.innerContainer}>
              <h3>
                Now that you have seen our list of squishables, it is time to
                start the squishing process.
              </h3>
              <p>Please click the button below to begin.</p>
              <Link to="/fruits">
                <button>Squishables</button>
              </Link>
            </div>
          </div>
          <List />
        </>
      )}
    </div>
  )
}

export default HomePage

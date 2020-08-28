import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { data } from '../../data/data'
import FruitButton from '../../ui/FruitButton/FruitButton'
import Bowls from '../../ui/Bowls/Bowls'

import styles from './FruitsPage.module.scss'

const FruitsPage = () => {
  const [addedFruits, setAddedFruits] = useState(false)
  const [fruitList, setFruitList] = useState([])

  const handleAddToFruitList = (id) => {
    const filtered = data.filter((fruits) => fruits.id === id)[0]

    if (fruitList.length < 3) {
      return setFruitList([...fruitList, filtered])
    }
    setFruitList([...fruitList.slice(1), filtered])
  }

  const handleAddtoBowl = () => {
    if (fruitList.length === 3) {
      setAddedFruits((s) => !s)
      //triggers animation for adding selected fruit to bowl
    }
    //triggers tooltip to pick more fruits
  }

  const handleReset = () => {
    window.location.reload(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.innerContainerLeft}>
          <div className={styles.textContainer}>
            <h3>Now the real fun begins!</h3>
            {!addedFruits ? (
              <>
                <p> Pick three of the fruits from the list below.</p>
                <button type="button" onClick={() => handleAddtoBowl()}>
                  Add to Bowl
                </button>
              </>
            ) : (
              <>
                <p className="squish">Squish that fruit!</p>
                <div className="mix-squish-buttons">
                  <button type="button" style={{ marginRight: '1rem' }}>
                    <Link
                      to={{
                        pathname: '/squish',
                        state: {
                          fruitList: fruitList,
                        },
                      }}
                    >
                      SQUISH
                    </Link>
                  </button>
                  <button onClick={() => handleReset()} type="button">
                    Reset
                  </button>
                </div>
              </>
            )}
          </div>
          <div className={styles.fruitL2} id="fruitsLB">
            <ul>
              {data.map((fruit) => (
                <li key={fruit.id}>
                  <FruitButton
                    id={fruit.id}
                    src={fruit.url}
                    onClick={handleAddToFruitList}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Bowls fruitList={fruitList} addFruits={addedFruits} />
      </div>
    </div>
  )
}

export default FruitsPage

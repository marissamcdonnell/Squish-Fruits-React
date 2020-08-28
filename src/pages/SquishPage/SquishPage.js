import React, { useEffect, useState } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

import ResultModal from '../../ui/ResultModal/ResultModal'
import Bowls from '../../ui/Bowls/Bowls'
import pestle from '../../images/pestle.png'
import { squishing } from '../../utils/squishAnimation'

import styles from './SquishPage.module.scss'

const SquishPage = () => {
  const [fruitList, setFruitList] = useState([])
  const [modalToggle, setModalToggle] = useState(false)
  const [squishClick, setSquishClick] = useState(0)
  let location = useLocation()

  useEffect(() => {
    if (location.state.fruitList) {
      setFruitList(location.state.fruitList)
    }
  }, [])

  const fruitTaste = (fruitList) => {
    let numA = Math.floor(Math.random() * 3)
    let numB = Math.floor(Math.random() * 3)
    return fruitList[numA].flavor[numB]
  }

  return (
    <>
      {!fruitList ? (
        <Redirect
          to={{
            pathname: '/fruits',
            state: { error: 'need fruit' },
          }}
        />
      ) : (
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.mixLeft}>
              <h3>Now Squish the fruits to a nice squished mush!!!</h3>
              <button
                onClick={() =>
                  squishing(squishClick, setModalToggle, setSquishClick)
                }
                type="button"
              >
                Squish
              </button>
            </div>
            <div>
              <img
                className={styles.pestle}
                src={pestle}
                hidden={modalToggle}
                id="pestle"
              />
              <Bowls
                fruitList={fruitList}
                addFruits
                className={
                  !modalToggle ? styles.squishPage : styles.squishPageNone
                }
              />
            </div>
            <ResultModal
              modalToggle={modalToggle}
              setModalToggle={setModalToggle}
              result={fruitTaste(location.state.fruitList)}
              setSquishClick={setSquishClick}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default SquishPage

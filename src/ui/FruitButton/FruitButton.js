import React from 'react'
// import PropTypes from 'prop-types'

import styles from './FruitButton.module.scss'

const FruitButton = ({ id, src, onClick }) => {
  // chooseFruit(id) {
  //   const { appContext } = this.props
  //   const chosenFruitId = id
  //   const { url } = appContext.fruits.find(
  //     (fruit) => fruit.id === chosenFruitId
  //   )
  //   if (appContext.addFruit == false) {
  //     appContext.setContextState(({ click, clickedFruits }) => ({
  //       click: click + 1,
  //       clickedFruits:
  //         click < 3
  //           ? [...clickedFruits, url]
  //           : [...clickedFruits.slice(1), url],
  //     }))
  //   }
  // }
  //first solution to rotate through adding fruits then clearing fruits on fourth click
  // clickedFruits: clickedFruits.length > 2 ? [] : [...clickedFruits, url]

  return (
    <button className={styles.button} onClick={() => onClick(id)} type="button">
      <img id={id} src={src} />
    </button>
  )
}

// FruitButton.propTypes = {
//   id: PropTypes.number.isRequired,
//   src: PropTypes.string.isRequired,
// }

export default FruitButton

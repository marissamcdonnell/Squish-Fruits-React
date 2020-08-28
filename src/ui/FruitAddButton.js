import React from 'react'

const FruitAddButton = () => {
  // constructor() {
  //   super()
  //   this.addFruitToBowl = this.addFruitToBowl.bind(this)
  //   this.fruitTaste = this.fruitTaste.bind(this)
  // }

  // addFruitToBowl() {
  //   const { appContext } = this.props
  //   if (appContext.click >= 3) {
  //     appContext.setContextState({
  //       addFruit: true,
  //       redirect: false,
  //     })
  //     this.fruitTaste()
  //   }
  // }

  // fruitTaste() {
  //   const { appContext } = this.props
  //   const tasteArray = appContext.clickedFruits.map((url) => {
  //     const { flavor } = appContext.fruits.find((fruit) => fruit.url === url)
  //     return flavor
  //   })
  //   let numA = Math.floor(Math.random() * 3)
  //   let numB = Math.floor(Math.random() * 3)

  //   appContext.setContextState({
  //     taste: tasteArray[numA][numB],
  //   })

  return <button id="add-to-bowl">Add to Bowl</button>
}

export default FruitAddButton

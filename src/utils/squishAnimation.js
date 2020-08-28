import anime from 'animejs'

const pestleAnimation = {
  targets: '#pestle',
  translateY: [
    { value: 200, duration: 400 },
    { value: 0, duration: 500, easing: 'easeOutExpo' },

    { value: 200, duration: 400 },
    { value: 0, duration: 600, easing: 'easeOutExpo' },

    { value: 200, duration: 400 },
    { value: 0, duration: 600, easing: 'easeOutExpo' },
  ],
  translateX: [
    { value: -20, duration: 400 },
    { value: 60, duration: 500, easing: 'easeOutExpo' },

    { value: 0, duration: 400 },
    { value: -60, duration: 600, easing: 'easeOutExpo' },

    { value: 20, duration: 400 },
    { value: 0, duration: 600, easing: 'easeOutExpo' },
  ],
  rotate: [
    { value: 25, duration: 400, delay: 400, easing: 'easeOutSine' },

    { value: -10, duration: 400, delay: 400, easing: 'easeOutSine' },

    { value: 16, duration: 400, delay: 400, easing: 'easeOutSine' },
  ],
}

export const squishing = (squishClick, setModalToggle, setSquishClick) => {
  anime(pestleAnimation)
  switch (squishClick) {
    case 0:
      let case0 = anime.timeline()
      case0
        .add({
          targets: ['#bowlLeft', '#bowlMiddle', '#bowlRight'],
          opacity: 0,
          easing: 'easeInOutQuad',
          duration: 1000,
        })
        .add({
          offset: 0,
          targets: '#squishFruit',
          opacity: 1,
          easing: 'easeInOutQuad',
          translateY: { value: -18, easing: 'linear' },
          duration: 1000,
        })
      break
    case 1:
      let case1 = anime.timeline()
      case1
        .add({
          targets: '#squishFruit',
          opacity: 0,
          easing: 'easeInOutQuad',
          translateY: { value: 15, easing: 'linear' },
          duration: 1000,
        })
        .add({
          offset: 0,
          targets: '#squishFruit2',
          opacity: 1,
          easing: 'easeInOutQuad',
          translateY: { value: -18, easing: 'linear' },
          duration: 1000,
        })
      break
    case 2:
      let case2 = anime.timeline()
      case2
        .add({
          targets: '#squishFruit2',
          opacity: 0,
          easing: 'easeInOutQuad',
          translateY: { value: 15, easing: 'linear' },
          duration: 1000,
        })
        .add({
          offset: 0,
          targets: '#squishFruit3',
          opacity: 1,
          easing: 'easeInOutQuad',
          translateY: { value: -18, easing: 'linear' },
          duration: 1000,
        })
      break
    case 3:
      setModalToggle((s) => !s)
      break
    default:
      setSquishClick(0)
      break
  }
  setSquishClick(squishClick + 1)
}

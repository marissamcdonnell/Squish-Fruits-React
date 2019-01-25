import React from "react";
import { withAppContext } from "../../utils/AppContext";
import anime from "animejs";

class SquishButton extends React.Component {
  constructor() {
    super();
    this.squishing = this.squishing.bind(this);
    // this.pestleAnimation = this.pestleAnimation.bind(this);
  }

  pestleAnimation = {
    targets: ".pestle",
    translateY: [
      { value: 200, duration: 400 },
      { value: 0, duration: 500, easing: "easeOutExpo" },

      { value: 200, duration: 400 },
      { value: 0, duration: 600, easing: "easeOutExpo" },

      { value: 200, duration: 400 },
      { value: 0, duration: 600, easing: "easeOutExpo" }
    ],
    translateX: [
      { value: -20, duration: 400 },
      { value: 60, duration: 500, easing: "easeOutExpo" },

      { value: 0, duration: 400 },
      { value: -60, duration: 600, easing: "easeOutExpo" },

      { value: 20, duration: 400 },
      { value: 0, duration: 600, easing: "easeOutExpo" }
    ],
    rotate: [
      { value: 25, duration: 400, delay: 400, easing: "easeOutSine" },

      { value: -10, duration: 400, delay: 400, easing: "easeOutSine" },

      { value: 16, duration: 400, delay: 400, easing: "easeOutSine" }
    ]
  };

  squishing() {
    const { appContext } = this.props;
    anime(this.pestleAnimation);
    switch (appContext.squishClick) {
      case 0:
        let case0 = anime.timeline();
        case0
          .add({
            targets: ".basket",
            opacity: 0,
            easing: "easeInOutQuad",
            translateY: { value: 15, easing: "linear" },
            duration: 1000
          })
          .add({
            offset: 0,
            delay: 300,
            targets: ".squishFruit",
            opacity: 1,
            easing: "easeInOutQuad",
            translateY: { value: -18, easing: "linear" },
            duration: 1000
          });
        break;
      case 1:
        let case1 = anime.timeline();
        case1
          .add({
            targets: ".squishFruit",
            opacity: 0,
            easing: "easeInOutQuad",
            translateY: { value: 15, easing: "linear" },
            duration: 1000
          })
          .add({
            offset: 0,
            targets: ".squishFruit2",
            opacity: 1,
            easing: "easeInOutQuad",
            translateY: { value: -18, easing: "linear" },
            duration: 1000
          });
        break;
      case 2:
        let case2 = anime.timeline();
        case2
          .add({
            targets: ".squishFruit2",
            opacity: 0,
            easing: "easeInOutQuad",
            translateY: { value: 15, easing: "linear" },
            duration: 1000
          })
          .add({
            offset: 0,
            targets: ".squishFruit3",
            opacity: 1,
            easing: "easeInOutQuad",
            translateY: { value: -18, easing: "linear" },
            duration: 1000
          });
        break;
      case 3:
        appContext.setContextState({ showModal: true });
        break;
      default:
        appContext.setContextState({ squishClick: 0 });
        break;
    }
    appContext.setContextState({ squishClick: appContext.squishClick + 1 });
  }

  render() {
    return (
      <button className="button" onClick={this.squishing}>
        Squish!!!
      </button>
    );
  }
}

export default withAppContext(SquishButton);

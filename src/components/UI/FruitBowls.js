import React from "react";
import { withAppContext } from "../../utils/AppContext";

const FruitBowls = ({ appContext }) => (
  <div className="mix-right-bowl">
    <div className="basket">
      <div
        className={
          appContext.addFruit == true ? "fruit-1-in-bowl" : "fruit-basket_sides"
        }
      >
        <img
          id="a"
          className="fruit-boxes-1"
          src={
            appContext.clickedFruits.length > 0
              ? appContext.clickedFruits[0]
              : "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
          }
        />
      </div>
      <div
        className={
          appContext.addFruit == true ? "fruit-2-in-bowl" : "fruit-basket"
        }
      >
        <img
          id="b"
          className="fruit-boxes-2"
          src={
            appContext.clickedFruits.length > 1
              ? appContext.clickedFruits[1]
              : "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
          }
        />
      </div>
      <div
        className={
          appContext.addFruit == true ? "fruit-3-in-bowl" : "fruit-basket_sides"
        }
      >
        <img
          id="c"
          className="fruit-boxes-3"
          src={
            appContext.clickedFruits.length > 2
              ? appContext.clickedFruits[2]
              : "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
          }
        />
      </div>
    </div>
    <img
      className="bowlFront"
      src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/frontbowl.png"
    />
    <img
      className="bowlBack"
      src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
    />
    <img className="squishFruit" src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/squish1.png" /> 
    <img className="squishFruit2" src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/squish2.png" /> 
    <img className="squishFruit3" src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/squish3.png" /> 
  </div>
);

export default withAppContext(FruitBowls);

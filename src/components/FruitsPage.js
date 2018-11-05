import React from "react";
import { withAppContext } from "../utils/AppContext";
import ChooseFruit from "./ChooseFruit";

const FruitsPage = ({ appContext }) => (
  <div className="mix">
    <div className="mix-container">
      <div className="mixLeft">
        <h3>Now the real fun begins!</h3>
        <p id="clickhide"> Pick three of the fruits from the list below.</p>
        <button id="add-button">Add to Bowl</button>
        <p>state: {appContext.click}</p>
        <div className="fruitL2">
          <div id="fruitsLB">
            <ul>
              {appContext.fruits &&
                appContext.fruits.map(fruit => (
                  <li key={fruit.id}>
                    <ChooseFruit
                      onClick={appContext.chooseFruit}
                      id={fruit.id}
                      src={fruit.url}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mix-right-bowl">
        <div className="basket">
          <div className="fruit-basket_sides">
            <img
              id="a"
              className="fruit-boxes-1"
              src={appContext.fruitA.length > 0
                  ? appContext.fruitA
                  : "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
              }
            />
          </div>
          <div className="fruit-basket">
            <img
              id="b"
              className="fruit-boxes-2"
              src={
                appContext.fruitB.length > 0
                  ? appContext.fruitB
                  : "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
              }
            />
          </div>
          <div className="fruit-basket_sides">
            <img
              id="c"
              className="fruit-boxes-3"
              src={
                appContext.fruitC.length > 0
                  ? appContext.fruitC
                  : "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

{
  /* <!--button after fruit is added to bowl--> */
}
{
  /* <p className="squish">Squish that fruit!</p>

                        <button className="squish">SQUISH!</button> */
}

{
  /* <!--Fruit list on left--> */
}
//   <div className="fruitL2">
//     <div id="fruitsLB">
//       <ul>
//         {this.state.fruits.map(fruit => (
//           <li key={fruit.id}>
//             <button onClick={this.handleClick} id={fruit.id}>
//               <img src={fruit.url} />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>
// {/* <!--bowl and fruits on right--> */}
// <div className="mix-right-bowl">
//   <img
//     src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/frontbowl.png"
//     alt="Green Bowl"
//   />
//   <img src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/backbowl.png" />
//
//   <div className="basket">
//     <div className="fruit-basket_sides">
//       {/* <img id = "a" className = "fruit-boxes-1" src = "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png" /> */}
//     </div>
//     <div className="fruit-basket">
//       <img
//         id="b"
//         className="fruit-boxes-2"
//         src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
//       />
//     </div>
//     <div className="fruit-basket_sides">
//       <img
//         id="c"
//         className="fruit-boxes-3"
//         src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png"
//       />
//     </div>
//   </div>
{
  /* <img className = "squishFruit" src = "" />
                        <img className = "squishFruit2" src = "" />
                        <img className = "squishFruit3" src = "" /> */
}
// </div>

/* <img className = "pestle" src = "images/pestle.png" />
                    <div className = "alert">
                        <h3 id = "finishM">Your squished fruit tastes like <span id ="word"></span>!</h3>
                        <button className = "result" onClick="">Squish Again!</button>
                    </div> */

export default withAppContext(FruitsPage);

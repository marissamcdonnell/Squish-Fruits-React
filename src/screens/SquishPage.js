import React from "react";
import FruitBowls from "../components/UI/FruitBowls";
import { withAppContext } from "../utils/AppContext";
import SquishButton from "../components/SquishPage/SquishButton";

const SquishPage = ({ appContext }) => (
  <div className="mix squish-page">
    <div className="mixLeft mix-left-extra">
      <h3>Now Squish the fruits to a nice squished mush!!!</h3>
      <SquishButton />
    </div>
    {appContext.squishClick == 4 ? (
      ""
    ) : (
      <div>
        <img
          className="pestle"
          src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/pestle.png"
        />
        <FruitBowls />
      </div>
    )}
  </div>
);

export default withAppContext(SquishPage);

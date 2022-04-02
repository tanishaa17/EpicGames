import React from "react";
import styles from "../style/BreadCrum.module.css";
// import { Carausel } from "./carauselhomepage";

import { CardPoster } from "./cardPoster";
import { PopularCards } from "./PopularCardSection";
import { ProductList } from "./productList";

export const HomepageU = () => {
  return (
    <div id="mainDiv2_U" className={styles.mainDiv_U}>
      {/* <Carausel/> */}
      <PopularCards />
      <CardPoster />
      <ProductList/>
    </div>
  );
};

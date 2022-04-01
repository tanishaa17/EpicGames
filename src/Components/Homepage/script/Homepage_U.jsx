import React from "react";
import styles from "../style/homepage.module.css";
import { BreadCrum } from "./breadcrum";
import { CardPoster } from "./cardPoster";
import { PopularCards } from "./PopularCardSection";
// import { ProductList } from "./productList";

export const HomepageU = () => {
  return (
    <div id="mainDiv2_U" className={styles.mainDiv_U}>
      <BreadCrum />
      <PopularCards />
      <CardPoster />
      {/* <ProductList/> */}
    </div>
  );
};

import React from "react";
import styles from "../style/carausel.module.css";
// import { Row, Col } from "react-bootstrap";
// import { BiSearch } from "react-icons/bi";
// import { MdOutlineFavorite } from "react-icons/md";
// import { ImCart } from "react-icons/im";
// import { Link } from "react-router-dom";

export const Carausel = () => {
  return (
    <div id="mainDiv2_U" className={styles.ProductPageUdit}>
      <div id={styles.carausel}>
        <div>
          <img
            width={"100%"}
            src="https://cdn2.unrealengine.com/ghostwire-egs-carousel-1248x702-03-nologo-1248x702-81c794a4e252.jpg?h=1080&resize=1&w=1920"
            alt=""
          />
        </div>
        <div>
          <div>one</div>
          <div>two</div>
          <div>thee</div>
          <div>four</div>
          <div>five</div>
          <div>six</div>
        </div>
      </div>
    </div>
  );
};

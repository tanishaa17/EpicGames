import React from "react";
import styles from "../style/homepage.module.css";
import { Row, Col } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

export const BreadCrum = () => {
  return (
    <div id="navBar2_U" className={styles.nav2Div_U}>
      <Row className=" ">
        <Col
          id={styles.searchBoxDiv_U}
          className="d-flex justify-content-center align-items-center  rounded-pill "
          xs={3}
          md={3}
        >
          <div id={styles.searchLogo_U}>
            <BiSearch className="text-light" />
          </div>

          <input
            type="text"
            placeholder="Search"
            className="d-none d-md-block d-lg-block"
            id={styles.searchBox2_U}
          />
        </Col>
        <Col id={styles.navList2_U} className=" gap-3 px-4 " xs={7} md={7}>
          <Link
            id={styles.link1_U}
            className="d-none  d-md-block d-sm-block text-decoration-none"
            to={"/about"}
          >
            About
          </Link>
          <Link
            id={styles.link2_U}
            className="d-none d-md-block d-sm-block text-decoration-none "
            to={"/about"}
          >
            Browse
          </Link>
          <Link
            id={styles.link3_U}
            className="d-none d-md-block d-sm-block text-decoration-none "
            to={"/about"}
          >
            News
          </Link>
          <Link
            id={styles.link4_U}
            className=" d-md-block d-sm-block text-decoration-none "
            to={"/dicscover"}
          >
            Discover
          </Link>
        </Col>
        <Col id={styles.navList2Cart_U} className=" gap-3 px-1  " xs={2} md={2}>
          <Link
            id={styles.link5_U}
            className="d-none  d-lg-block d-md-none d-sm-none text-decoration-none"
            to={"/wishlist"}
          >
            Wishlist
          </Link>
          <Link
            id={styles.link6_U}
            className="d-none d-lg-block d-md-none d-sm-none text-decoration-none"
            to={"/cart"}
          >
            Cart
          </Link>
          <Link
            className="d-none d-lg-none d-md-block d-sm-block "
            to={"/wishlist"}
          >
            <MdOutlineFavorite />
          </Link>
          <Link className="d-block d-lg-none" to={"/cart"}>
            <ImCart />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

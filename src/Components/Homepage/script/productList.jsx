import React, { useState } from "react";
import styles from "../style/productList.module.css";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

export const ProductList = () => {
  return (
    <div id={styles.ProductPageUdit}>
      <div className="d-flex text-light border justify-content-between align-items-center">
        <div className="border  ">
          <div className="d-flex justify-content-between">
            <p className=" text-light ">
              <b>Most Popular</b>
            </p>
            <Button
              variant="outline-secondary "
              className="btn btn-sm text-light"
            >
              View More
            </Button>
          </div>
          <ul className="list-group gap-2 p-2 rounded-3  ">
            <li
              className="list-group-item bg-dark  text-light  "
              type="button"
              variant="dark"
            >
              <div className="  bg-dark  " id={styles.productListGrpUdit}>
                <div>
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/50947c834e41464b84a9fd8a60c68793/download-astalon-tears-of-the-earth-offer-vgroh.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className={styles.listtags}>
                  <p>Astalon -Tears of the Earth-</p>
                  <p>Rs 200</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div>
          <div>List-2</div>
          <div>
            <div>one</div>
            <div>two</div>
            <div>thee</div>
            <div>four</div>
            <div>five</div>
          </div>
        </div>
        <div>
          <div>List-3</div>
          <div>
            <div>one</div>
            <div>two</div>
            <div>thee</div>
            <div>four</div>
            <div>five</div>
          </div>
        </div>
      </div>
    </div>
  );
};

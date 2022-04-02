import React, { useState } from "react";
import styles from "../style/productList.module.css";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductList = () => {
  return (
    <div id={styles.ProductPageUdit}>
      <div id={styles.cardContainer} className="">
        <div className="d-block">
          <div className="d-flex justify-content-between  mb-3   align-items-center">
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
          <ul className="list-group gap-2 border-dark rounded-3  ">
            <Link className={styles.link} to={"/products"}>
              <li
                className="list-group-item bg-dark text-light rounded-3"
                type="button"
                variant="dark"
              >
                <div className={styles.productListGrpUdit}>
                  <div className="rounded ">
                    <img
                      width={"50px"}
                      src="https://cdn1.epicgames.com/spt-assets/50947c834e41464b84a9fd8a60c68793/download-astalon-tears-of-the-earth-offer-vgroh.png?h=480&resize=1&w=360"
                      alt="Image"
                    />
                  </div>
                  <div className="d-flex flex-column align-items-start h6  ">
                    <p> Astalon -Tears of the Earth</p>
                    <p>₹200</p>
                  </div>
                </div>
              </li>
            </Link>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/d08c25c96a954b1b8cb0c22c3fec015f/download-princess-farmer-offer-rx4it.jpg?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column  align-items-start ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Princess Farmer </p>
                  </Link>
                  <p>₹349</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/offer/c11f80fe3b674a2bbf60e4c46d588a54/EGS_PinballFX_ZenStudios_S2_1200x1600-2f1b7a78e6ed9701e96c49c6d082a8b9?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Pinball FX </p>
                  </Link>
                  <p>Free</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/127cdd507a3a404883d77705ee2700e4/download-weird-west-offer-13tjq.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p>Weird West </p>
                  </Link>
                  <p>₹1,499</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/4660213ebd0b45a2823f9fefa0ffefcd/download-glitchhikers--the-spaces-between-offer-6rni7.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Glitchhikers: The Spaces Between </p>
                  </Link>
                  <p>₹2,499</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="d-none d-md-block d-sm-block d-lg-block d-xl-block ">
          <div className="d-flex justify-content-between  mb-3   align-items-center">
            <p className=" text-light ">
              <b>Top Sellers</b>
            </p>
            <Button
              variant="outline-secondary "
              className="btn btn-sm text-light"
            >
              View More
            </Button>
          </div>
          <ul className="list-group gap-2 border-dark  ">
            <li
              className="list-group-item bg-dark rounded-3text-light "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/50947c834e41464b84a9fd8a60c68793/download-astalon-tears-of-the-earth-offer-vgroh.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Astalon -Tears of the Earth</p>
                  </Link>
                  <p>₹200</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/d08c25c96a954b1b8cb0c22c3fec015f/download-princess-farmer-offer-rx4it.jpg?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column  align-items-start ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Princess Farmer </p>
                  </Link>
                  <p>₹349</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/offer/c11f80fe3b674a2bbf60e4c46d588a54/EGS_PinballFX_ZenStudios_S2_1200x1600-2f1b7a78e6ed9701e96c49c6d082a8b9?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Pinball FX </p>
                  </Link>
                  <p>Free</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/127cdd507a3a404883d77705ee2700e4/download-weird-west-offer-13tjq.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p>Weird West </p>
                  </Link>
                  <p>₹1,499</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/4660213ebd0b45a2823f9fefa0ffefcd/download-glitchhikers--the-spaces-between-offer-6rni7.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Glitchhikers: The Spaces Between </p>
                  </Link>
                  <p>₹2,499</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="d-none  d-lg-block d-xl-block ">
          <div className="d-flex justify-content-between  mb-3   align-items-center">
            <p className=" text-light ">
              <b>Coming Soon</b>
            </p>
            <Button
              variant="outline-secondary "
              className="btn btn-sm text-light"
            >
              View More
            </Button>
          </div>
          <ul className="list-group gap-2 border-dark rounded-3  ">
            <li
              className="list-group-item bg-dark rounded-3text-light "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/50947c834e41464b84a9fd8a60c68793/download-astalon-tears-of-the-earth-offer-vgroh.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Astalon -Tears of the Earth</p>
                  </Link>
                  <p>₹200</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/d08c25c96a954b1b8cb0c22c3fec015f/download-princess-farmer-offer-rx4it.jpg?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column  align-items-start ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Princess Farmer </p>
                  </Link>
                  <p>₹349</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/offer/c11f80fe3b674a2bbf60e4c46d588a54/EGS_PinballFX_ZenStudios_S2_1200x1600-2f1b7a78e6ed9701e96c49c6d082a8b9?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Pinball FX </p>
                  </Link>
                  <p>Free</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/127cdd507a3a404883d77705ee2700e4/download-weird-west-offer-13tjq.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p>Weird West </p>
                  </Link>
                  <p>₹1,499</p>
                </div>
              </div>
            </li>
            <li
              className="list-group-item bg-dark rounded-3 text-light  "
              type="button"
              variant="dark"
            >
              <div className={styles.productListGrpUdit}>
                <div className="rounded ">
                  <img
                    width={"50px"}
                    src="https://cdn1.epicgames.com/spt-assets/4660213ebd0b45a2823f9fefa0ffefcd/download-glitchhikers--the-spaces-between-offer-6rni7.png?h=480&resize=1&w=360"
                    alt="Image"
                  />
                </div>
                <div className="d-flex flex-column align-items-start h6  ">
                  <Link className={styles.link} to={"/products"}>
                    <p> Glitchhikers: The Spaces Between </p>
                  </Link>
                  <p>₹2,499</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

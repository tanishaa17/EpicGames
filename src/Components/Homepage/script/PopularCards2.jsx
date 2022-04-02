import React, { useState } from "react";
import styles from "../style/popularproductUdit.module.css";
import { HiArrowSmRight } from "react-icons/hi";
import { Card, Button } from "react-bootstrap";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export const PopularCards2 = () => {
  return (
    <div className={styles.ProductPageUdit}>
      <div className="d-flex   justify-content-between px-2 align-items-center">
        <p className="text-light ">
          <b>Spriring Sells Spotlight </b> <span>{<HiArrowSmRight />}</span>{" "}
        </p>
        <div className="d-none gap-3  d-sm-flex   d-xs-none d-md-flex d-lg-flex ">
          <MdOutlineArrowBackIos
            type="button"
            className="text-light bg-dark rounded"
          />
          <MdOutlineArrowForwardIos
            type="button"
            className=" text-light bg-dark rounded"
          />
        </div>
      </div>
      <div className={styles.popularProductGrid}>
        <Card id={styles.popularCardmain} className=" text-light">
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S2_1200x1600-d062aa01760072626d27af24af05db77?h=854&resize=1&w=640"
          />
          <Card.Body>
            <Card.Title className="h6 text-truncate">
              DEATHLOOP ON COMPUTER
            </Card.Title>

            <div className="d-flex gap-3 align-items-baseline">
              <Button variant="primary btn-sm">-50%</Button>

              <Card.Text className="text-truncate text-decoration-line-through">
                ₹2000
              </Card.Text>
              <Card.Text>₹599</Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card id={styles.popularCardmain} className=" text-light">
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/salesEvent/salesEvent/725818d8-9768-4a6a-a723-3039aaee1e23_1200x1600-3b6116d3fc1b566b71251d04bce27938?h=854&resize=1&w=640"
          />
          <Card.Body>
            <Card.Title className="h6 text-truncate">
              Tiny Tina's Wonderlands
            </Card.Title>

            <div className="d-flex gap-3 align-items-baseline">
              <Button variant="primary btn-sm">-50%</Button>

              <Card.Text className="text-truncate text-decoration-line-through">
                ₹4000
              </Card.Text>
              <Card.Text>₹799</Card.Text>
            </div>
          </Card.Body>
        </Card>{" "}
        <Card
          id={styles.popularCardmain}
          className="d-none d-lg-block d-md-block d-sm-block   text-light"
        >
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=854&resize=1&w=640"
          />
          <Card.Body>
            <Card.Title className="h6  text-truncate">
              VALORANT: THE WORRIORS
            </Card.Title>

            <div className="d-flex gap-3 align-items-baseline">
              <Button variant="primary btn-sm">-50%</Button>

              <Card.Text className="text-truncate">Free</Card.Text>
            </div>
          </Card.Body>
        </Card>{" "}
        <Card
          id={styles.popularCardmain}
          className="d-none d-sm-block d-md-none d-lg-none d-xl-block d-xxl-block   text-light"
        >
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=854&resize=1&w=640"
          />
          <Card.Body>
            <Card.Title className="h6 text-truncate">
              NARAKA: BLADEPOINT
            </Card.Title>

            <div className="d-flex gap-3 align-items-baseline">
              <Button variant="primary btn-sm">-50%</Button>

              <Card.Text className="text-truncate text-decoration-line-through">
                ₹1899
              </Card.Text>
              <Card.Text>₹499</Card.Text>
            </div>
          </Card.Body>
        </Card>{" "}
        <Card
          id={styles.popularCardmain}
          className="d-none  d-xl-block  text-light"
        >
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/catnip/offer/BL3Tall_1200x1440-1200x1440-c1200ae70b5e054025e296746d1987a8.jpg?h=854&resize=1&w=640"
          />
          <Card.Body>
            <Card.Title className="h6 text-truncate">
              DEMON'S TILT: FUN GAMES
            </Card.Title>

            <div className="d-flex gap-3 align-items-baseline">
              <Button variant="primary btn-sm">-50%</Button>

              <Card.Text className="text-truncate text-decoration-line-through">
                ₹2500
              </Card.Text>
              <Card.Text>₹699</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

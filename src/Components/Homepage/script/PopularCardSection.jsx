import React, { useState } from "react";
import styles from "../style/popularproductUdit.module.css";
import { HiArrowSmRight } from "react-icons/hi";
import {  Card, Button } from "react-bootstrap";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export const PopularCards = () => {
  return (
    <div className={styles.ProductPageUdit}>
      <div className="d-flex   justify-content-between px-2 align-items-center">
        <p className="text-light ">
          <b>Most Popular</b> <span>{<HiArrowSmRight />}</span>{" "}
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
            src="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640"
          />
          <Card.Body>
            <Card.Title className="h6 text-truncate">
              Grand Theft Auto V preimium
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
            src="https://cdn1.epicgames.com/salesEvent/salesEvent/Daffodil_1P_Awareness_INT_Epic_1200x1600_1200x1600-356dd4965bde4c5dbd1000f9c97ac4b4?h=854&resize=1&w=640"
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
        <Card id={styles.popularCardmain} className=" text-light">
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-726a3c696c29550e1f926c871cc4bcbe?h=854&resize=1&w=640"
          />
          <Card.Body  >
            <Card.Title className="h6  text-truncate">VALORANT: THE WORRIORS</Card.Title>

            <div className="d-flex gap-3 align-items-baseline">
              <Button variant="primary btn-sm">-50%</Button>

              <Card.Text className="text-truncate">Free</Card.Text>
            </div>
          </Card.Body>
        </Card>{" "}
        <Card id={styles.popularCardmain} className=" text-light">
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-bf2b70ddd7ad45e44e629809e1b0ad10?h=854&resize=1&w=640"
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
        <Card id={styles.popularCardmain} className=" text-light">
          <Card.Img
            id={styles.CardImg_Udit}
            variant="top"
            type="button"
            className="rounded-3 "
            src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEMONSTILT_WIZNWAR_S2_1200x1600-b2171dcb9b7272a6e654f53a093e682d?h=854&resize=1&w=640"
          />
          <Card.Body>
            <Card.Title className="h6 text-truncate">DEMON'S TILT: FUN GAMES</Card.Title>

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

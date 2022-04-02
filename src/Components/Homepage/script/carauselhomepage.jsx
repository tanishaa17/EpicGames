import React, { useState } from "react";
import styles from "../style/carausel.module.css";


import Carousel from "react-bootstrap/Carousel";

export const Carausel = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <div id={styles.ProductPageUdit}>
      <div id={styles.carausel}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://cdn2.unrealengine.com/ghostwire-egs-carousel-1248x702-03-nologo-1248x702-81c794a4e252.jpg?h=1080&resize=1&w=1920"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://cdn2.unrealengine.com/egs-spring-sale-carousel-desktop-video-still-1248x702-cfc5cea6049f.png?h=1080&resize=1&w=1920"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item intarval={1000} >
            <img
              className="d-block w-100"
              src="https://cdn2.unrealengine.com/20br-zerobuild-1p-egs-fc-1248x702-1248x702-9f768fc7a811.jpg?h=1080&resize=1&w=1920"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div>
          <div>
            <div id={styles.productListGrpUdit}>
              <div className="d-none  d-md-block d-lg-block d-xl-block">
                <img
                  width={"50px"}
                  className="rounded-3"
                  src="https://cdn2.unrealengine.com/ghostwire-egs-carousel-mobile-1200x1600-03-1200x1600-ea8411ee16e8.jpg?h=1280&resize=1&w=960"
                  alt="Image"
                />
              </div>
              <div className="d-none  d-md-block d-lg-block d-xl-block align-items-center ">
                <p>GHOSTWIRE</p>
              </div>
              <div className="d-flex d-md-none  "> .</div>
            </div>
          </div>
          <div>
            <div id={styles.productListGrpUdit}>
              <div className="d-none d-md-block d-lg-block d-xl-block">
                <img
                  width={"50px"}
                  className="rounded-3"
                  src="https://cdn2.unrealengine.com/egs-en-genshin-impact-2-6-thumb-1200x1600-1200x1600-83a804d427ad.jpg?h=1280&resize=1&w=960"
                  alt="Image"
                />
              </div>
              <div className="d-none  d-md-block d-lg-block d-xl-block align-items-center ">
                <p>Ganshin Impact </p>
              </div>
              <div className="d-flex d-md-none  "> .</div>
            </div>
          </div>
          <div>
            <div id={styles.productListGrpUdit}>
              <div className="d-none  d-md-block d-lg-block d-xl-block">
                <img
                  width={"50px"}
                  className="rounded-3"
                  src="https://cdn2.unrealengine.com/en-egs-springsale2022-carousel-mobile-thumb-1200x1600-v02-1200x1600-1cbe6693050e.jpg?h=1280&resize=1&w=960"
                  alt="Image"
                />
              </div>
              <div className="d-none  d-md-block d-lg-block d-xl-block align-items-center ">
                <p>Spiring Sale </p>
              </div>
              <div className="d-flex d-md-none  "> .</div>
            </div>
          </div>
          <div>
            <div id={styles.productListGrpUdit}>
              <div className="d-none  d-md-block d-lg-block d-xl-block">
                <img
                  width={"50px"}
                  className="rounded-3"
                  src="https://cdn2.unrealengine.com/en-20br-zerobuild-1p-egs-fc-315x399-315x399-1faeed197b5d.jpg?h=1280&resize=1&w=960"
                  alt="Image"
                />
              </div>
              <div className="d-none  d-md-block d-lg-block d-xl-block  align-items-center ">
                <p>Fortnite</p>
              </div>
              <div className="d-flex d-md-none  "> .</div>
            </div>
          </div>
          <div>
            <div id={styles.productListGrpUdit}>
              <div className="d-none  d-md-block d-lg-block d-xl-block">
                <img
                  width={"50px"}
                  className="rounded-3"
                  src="https://cdn2.unrealengine.com/stranger-of-paradise-final-fantasy-origin-1200x1600-thumbnail-1200x1600-54080ce80d86.png?h=1280&resize=1&w=960"
                  alt="Image"
                />
              </div>
              <div className="d-none  d-md-block d-lg-block d-xl-block align-items-center ">
                <p>Stranger of paradise </p>
              </div>
              <div className="d-flex d-md-none  "> .</div>
            </div>
          </div>
          <div>
            <div id={styles.productListGrpUdit}>
              <div className="d-none  d-md-block d-lg-block d-xl-block">
                <img
                  width={"50px"}
                  className="rounded-3"
                  src="https://cdn1.epicgames.com/spt-assets/127cdd507a3a404883d77705ee2700e4/download-weird-west-offer-13tjq.png?h=480&resize=1&w=360"
                  alt="Image"
                />
              </div>
              <div className="d-none  d-md-block d-lg-block d-xl-block align-items-center ">
                <p>Weird West </p>
              </div>
              <div className="d-flex d-md-none  "> .</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

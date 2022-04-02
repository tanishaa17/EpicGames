import React, { useState } from "react";
import styles from "../style/cardPoster.module.css";

export const CardPoster = () => {
  return (
    <div className={styles.ProductPageUdit}>
      <div className="d-flex gap-5">
        <div
          id={styles.poster1Udit}
          class="d-none d-md-block d-lg-block d-xlg-block card mb-3"
        >
          <img
            src="https://cdn2.unrealengine.com/warframe-9th-year-anniversary-wisp-16x9-1920x1080-011ee83ecb83.jpg?h=1080&resize=1&w=1920"
            alt="Poster"
            className="card-img-top rounded-3"
          />
          <div class="card-body text-start">
            <h5 class="card-title ">9 Years of Warframe</h5>
            <p class="card-text">
              Log in today to receive the new Wisp Dex Skin, plus complete
              weekly Alerts to earn even more Anniversary Rewards!
            </p>
            <p class="card-text">
              <small class="text-muted">Free</small>
            </p>
          </div>
        </div>
        <div
          id={styles.poster2Udit}
          class="card mb-3 "
          data-bs-trigger="hover focus"
        >
          <img
            src="https://cdn2.unrealengine.com/sp-featured-carousel-desktop-1920x1080px-openbeta20thapril-noepiclogo-1920x1080-86e071b88ee0.png?h=1080&resize=1&w=1920"
            alt="Poster"
            className="card-img-top rounded-3"
          />
          <div class="card-body text-start">
            <h5 class="card-title ">9 Years of Warframe</h5>
            <p class="card-text">
              Log in today to receive the new Wisp Dex Skin, plus complete
              weekly Alerts to earn even more Anniversary Rewards!
            </p>
            <p class="card-text">
              <small class="text-muted">Free</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

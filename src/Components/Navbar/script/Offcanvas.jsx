import styles from "../style/offcanva.module.css";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaUserAlt } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

export const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const [userLogo, setVal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className={styles.hamburgerIconDiv}>
        <GiHamburgerMenu />
      </div>

      <Offcanvas className={styles.Offcanvas} show={show} onHide={handleClose} {...props}>
        <div>
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
        </div>
        <div className={styles.OffsetDiv}>
          <div className={styles.hamList}>
            <Link to={"/store"} className={styles.link}>
              <b>STORE</b>
            </Link>{" "}
            <Link to={"/FAQ"} className={styles.link}>
              <b>FAQ</b>
            </Link>{" "}
            <Link to={"/help"} className={styles.link}>
              <b>HELP</b>
            </Link>
            <Link to={"/unrealEngin"} className={styles.link}>
              <b>UNREAL ENGINE</b>
            </Link>
          </div>
          <div>
            <div className={styles.hamBtns}>
              <div className={styles.Alignment}>
                <div>{userLogo ? <FaUserAlt /> : <FaUserAlt />}</div>
                {userLogo ? "NAME" : "SIGN IN"}
              </div>
              <div>
                <BsGlobe />
              </div>
            </div>
            <Button
              className={styles.offcanDownlBtn}
              variant="primary"
              size="lg"
              onClick={() => {
                setVal(!userLogo);
              }}
            >
              Download
            </Button>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

import styles from "../style/navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Menu } from "@chakra-ui/react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { OffCanvasExample } from "./Offcanvas";
import { SiEpicgames } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { DropDown } from "./dropdown";

export const Navbar = () => {
  const [userLogo, setUserLogo] = useState(false);

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.listSection}>
            <Link className="text-light" to={"/"}>
              <SiEpicgames className={styles.branding} />
            </Link>
            <div className={styles.navMenu}>
              <div className={styles.one}>
                <li className={styles.listItem}>
                  <Link to={"/"} className={styles.link}>
                    <b>STORE</b>
                  </Link>
                </li>
              </div>
              <div className={styles.onemore}>
                <li className={styles.listItem}>
                  <Link to={"/"} className={styles.link}>
                    <b>FAQ</b>
                  </Link>
                </li>
              </div>
              <div className={styles.onemore}>
                <li className={styles.listItem}>
                  <Link to={"/"} className={styles.link}>
                    <b>HELP</b>
                  </Link>
                </li>
              </div>
              <div className={styles.onemore}>
                <li className={styles.listItem}>
                  <Link to={"/"} className={styles.link}>
                    <b>UNREAL ENGINE</b>
                  </Link>
                </li>
              </div>
            </div>
          </div>

          <div className={styles.rightNav}>
            <div>
              <BsGlobe />
            </div>

            <div className={styles.Alignment}>
              <div variant="button">
                {userLogo ? <FaUserAlt /> : <FaUserAlt />}
              </div>
              <DropDown />
            </div>

            <div className={styles.downloadbtn}>
              <Button id={styles.DownloadBtn} variant="primary">
                Download
              </Button>
            </div>
          </div>

          <div className={styles.hamburger}>
            <Menu>
              {["end"].map((placement, idx) => (
                <OffCanvasExample
                  key={idx}
                  placement={placement}
                  name={placement}
                />
              ))}
            </Menu>
          </div>
        </nav>
      </header>
    </>
  );
};

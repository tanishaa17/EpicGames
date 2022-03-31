import React, {Component} from 'react'
import styles from "../style/Footer.module.css";
import {MdOutlineExpandLess} from "react-icons/md"
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
export const Footer = ()=>{
    return (
        <div className={styles.sicontainer}>
            <div id={styles.siicons}>
                <div id={styles.sisocial}>
                    <div><AiFillFacebook id={styles.sifbicon}></AiFillFacebook></div>
                    <div><AiOutlineTwitter id={styles.sitwicon}></AiOutlineTwitter></div>
                    <div><AiFillYoutube id={styles.siyticon}></AiFillYoutube></div>
                </div>
                <div id={styles.siudiv}><MdOutlineExpandLess id={styles.siupicon}></MdOutlineExpandLess></div>
            </div>
            <div id={styles.siresources}>
                <div className={styles.sihead}><p>Resources</p></div>
                <div className={styles.sidetails}>
                    <div>
                        <ul className={styles.silist} type="none">
                            <li>Support-A-Creator</li>
                            <li>Publish on Epic Games</li>
                            <li>Careers</li>
                            <li>Company</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.silist} type="none">
                            <li>Fan Art Policy</li>
                            <li>UX Research</li>
                            <li>Store EULA</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.silist} type="none">
                            <li>Online Services</li>
                            <li>Community Rules</li>
                            <li>Epic Newsroom</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.sihead}><p>Made By Epic Games</p></div>
                <div className={styles.sidetails}>
                    <div>
                        <ul type="none">
                            <li>Battle Breakers</li>
                            <li>Fortnite</li>
                            <li>Infinity Blade</li>
                        </ul>
                    </div>
                    <div>
                        <ul type="none">
                            <li>Robo Recall</li>
                            <li>Shadow Complex</li>
                            <li>Unreal Tournament</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={styles.siline}></div>
            <div id={styles.sicopyright}>
                <p>
                © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   
                </p>
            </div>
            <div id={styles.siterms}>
                <div id={styles.sipolicy}>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Store Refund Policy</p>
                </div>
                <div id={styles.silogos}>
                <img width="15%" src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png" alt="" />
                <img id={styles.silogo} width="27%" src="/logoun.png" alt="" />
                </div>
            </div>
        </div>
    )
}
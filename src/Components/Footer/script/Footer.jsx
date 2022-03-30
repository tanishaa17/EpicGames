import React, {Component} from 'react'
import styles from "../style/Footer.module.css";
import {MdOutlineExpandLess} from "react-icons/md"
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
export const Footer = ()=>{
    return (
        <div className={styles.container}>
            <div id={styles.icons}>
                <div id={styles.social}>
                    <div><AiFillFacebook id={styles.fbicon}></AiFillFacebook></div>
                    <div><AiOutlineTwitter id={styles.twicon}></AiOutlineTwitter></div>
                    <div><AiFillYoutube id={styles.yticon}></AiFillYoutube></div>
                </div>
                <div id={styles.udiv}><MdOutlineExpandLess id={styles.upicon}></MdOutlineExpandLess></div>
            </div>
            <div id={styles.resources}>
                <div className={styles.head}><p>Resources</p></div>
                <div className={styles.details}>
                    <div>
                        <ul className={styles.list} type="none">
                            <li>Support-A-Creator</li>
                            <li>Publish on Epic Games</li>
                            <li>Careers</li>
                            <li>Company</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.list} type="none">
                            <li>Fan Art Policy</li>
                            <li>UX Research</li>
                            <li>Store EULA</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.list} type="none">
                            <li>Online Services</li>
                            <li>Community Rules</li>
                            <li>Epic Newsroom</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.head}><p>Made By Epic Games</p></div>
                <div className={styles.details}>
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
            <div id={styles.line}></div>
            <div id={styles.copyright}>
                <p>
                © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   
                </p>
            </div>
            <div id={styles.terms}>
                <div id={styles.policy}>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Store Refund Policy</p>
                </div>
                <div id={styles.logos}>
                <img width="15%" src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png" alt="" />
                <img id={styles.logo} width="27%" src="/logoun.png" alt="" />
                </div>
            </div>
        </div>
    )
}
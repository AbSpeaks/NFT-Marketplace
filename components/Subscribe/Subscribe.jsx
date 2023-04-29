import React from "react";
import Style from "./Subscribe.module.css";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";
import images from "../../img";


const Subscribe = () =>{

    return (
        <div className={Style.subscribe}>
            <div className={Style.subscribe_box}>
                <div className={Style.subscribe_box_left}>
                    <h2> Always be First</h2>
                    <p>Subscribe the newsletter so that you can never miss the updates regarding the nfts</p>
                    <div className={Style.subscribe_box_left_box}>
                        <span>01</span>
                        <small>Get recent updates</small>
                    </div>
                    <div className={Style.subscribe_box_left_box}>
                        <span>02</span>
                        <small>Gett premium services</small>
                    </div>
                    <div className={Style.subscribe_box_left_input}>
                        <input type="email" placeholder="Enter your email" />
                        <RiSendPlaneFill className={Style.subscribe_box_left_input_icons}/>
                    </div>
                </div>

                <div className={Style.subscribe_box_right}>
                    <Image src={images.letter } alt="new letter" width={600} height={600} />
                </div>
            </div>
        </div>
    )
}

export default Subscribe;
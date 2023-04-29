import React from "react";

import Style from "./HeroSection.module.css";

import Image from "next/image";

import images from "../../img";
import { Button } from "../componentsindex";

const HeroSection = () => {
    
    return (

        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>Discover, Collect, Sell Your Heroic NFTs </h1>
                    <p>Our NFT marketplace is the ultimate destination for art enthusiasts and collectors to explore a unique collection of heroic NFTs. With a wide range of creative artwork and designs, our platform provides an immersive experience for those looking to unleash their inner hero.</p>
                    <Button btnName="Start the Journey" />
                </div>
                <div className={Style.heroSection_box_right}>
                    <Image src={images.hero}  
                    alt="The herosection image"
                    width={600}
                    height={600}
                    />                    
                </div>
            </div>
        </div>
    );

    
};


export default HeroSection;
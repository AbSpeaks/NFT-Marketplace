import React from "react";


import Style from "../styles/index.module.css";
import {HeroSection ,Service,BigNFTSlider,Subscribe,Title,Category,Filter, NFTCard} from "../components/componentsindex"



const Home =() =>
{
    return (

        <div className={Style.homePage}>
            <HeroSection />
            <Service />
            <BigNFTSlider />
            <Subscribe/>
            <Title  heading="Feautred NFT"
            paragraph="Filter the most featured NFT"/>
            <Filter/>
            <Title heading="Search By Category "  paragraph= "Select your NFT according to the diffeent category" />
            <Category />
            <NFTCard/>
        </div>
    );    
}

export default Home;
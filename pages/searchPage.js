import React from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";          
import { Slider, Brand } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

const searchPage = () => {
  const collectionArray = [
    images.nft,
    images.nft1,
    images.nft2,
    images.nft3,
    images.nft4,
    images.nft5,
    images.nft6,
    images.nft3,
    images.nft4,
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
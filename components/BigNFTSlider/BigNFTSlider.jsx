import React from "react";
import Image from "next/image";
import Style from "./BigNFTSlider.module.css";
import images from "../../img";

import { useState,useEffect ,useCallback} from "react";

import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import Button from "../Button/Button";
import { title } from "process";

const BigNFTSlider = () =>{


    const [idNumber , setIdNumber] = useState(0);

    const sliderData  = [

        {
            title: "NFT 1",
            id: 1,
            name: "Abin Biju",
            collection :"basic",
            price : "052 ETH",
            like: 845,
            image: images.user,
            nftImage : images.nft2,

            time: {
                days: 21,
                hours: 40,
                minutes: 78,
                second: 14,
            },
        },

        {
            title: "NFT 2",
            id: 2,
            name: "Prajwal Vispute",
            collection :"basic",
            price : "47 ETH",
            like: 789,
            image: images.user2,
            nftImage : images.nft4,

            time: {
                days: 21,
                hours: 40,
                minutes: 78,
                second: 14,
            },
        },

        {
            title: "NFT 3",
            id: 3,
            name: "TUshar Naik",
            collection :"basic",
            price : "64 ETH",
            like: 485,
            image: images.user3,
            nftImage : images.nft3,

            time: {
                days: 21,
                hours: 40,
                minutes: 78,
                second: 14,
            },
        },
        {
            title: "NFT 4",
            id: 4,
            name: "Tejas GAndhalikar",
            collection :"basic",
            price : "847 ETH",
            like: 888,
            image: images.user4,
            nftImage : images.nft6,

            time: {
                days: 21,
                hours: 40,
                minutes: 78,
                second: 14,
            },
        },

        

    ]
    const inc = useCallback(() => {
        if (idNumber + 1 < sliderData.length) {
          setIdNumber(idNumber + 1);
        }
      }, [idNumber, sliderData.length]);
    
     
      const dec = useCallback(() => {
        if (idNumber > 0) {
          setIdNumber(idNumber - 1);
        }
      }, [idNumber]);

    return (

        <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$221,21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.second}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;

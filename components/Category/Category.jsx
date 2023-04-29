import React from "react";
import Style from "./Category.module.css";
import Image from "next/image";
import images from "../../img";
import { BsCircleFill } from "react-icons/bs";

const Category = () =>{

    const CategoryArray = [1,2,3,4,5];

    return (

        <div className={Style.category}>
            {CategoryArray.map((el,i)=> (
                <div className={Style.category_box} key={1+1}> 
                <Image src={images.creatorbackground2} 
                alt="cateogry"
                width={350}
                height={150}
                />
                <div className={Style.category_box_title}>
                    <span>
                        <BsCircleFill />
                    </span>
                    <div  className={Style.category_box_title_info}>
                        <h4>Gaming</h4>
                        <small>2002 NFT</small>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
};

export default Category;
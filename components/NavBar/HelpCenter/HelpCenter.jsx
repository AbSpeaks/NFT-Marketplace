import React from "react";
import Link from "next/link";

import Style from "./HelpCenter.module.css";

const HelpCenter = () =>
{
    const helpcenter = [
        {
            name: "About",
            link: "aboutus",
          },
          {
            name: "Contact Us",
            link: "contactus",
          },
          {
            name: "Sign Up",
            link: "signUp",
          },
          {
            name: "LogIn",
            link: "login",
          },
          {
            name: "Subscription",
            link: "subscription",
          },
    ];

    return (
        <div className={Style.box}> {helpcenter.map((el,i)=> (
            <div className={Style.helpcenter} key={i+1}>
                <Link href={{pathname: `${el.link}`}} >{el.name}</Link>
            </div>
        ))}</div>
       
    );
};

export default HelpCenter;


import React ,{useState,useEffect} from "react";

import Image from "next/image";
import {Button} from "../componentsindex";

import images from "../../img";

//IMPORT ICONS

import { MdCircleNotifications } from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuRight} from "react-icons/cg";


//INternal import 

import Style from "./NavBar.module.css";
import {Discover,HelpCenter,Notification,Profile,SideBar} from "./index";

const NavBar =() =>
{
    const[discover, setDiscover] = useState(false);
    const[help, setHelp] = useState(false);
    const[notification, setNotification] = useState(false);
    const[profile, setProfile] = useState(false);
    const[sideMenu, setSideMenu] = useState(false);

    const openMenu =(e) => {

        const btnText = e.target.innerText;

        if(btnText=="Discover")
        {
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);

        }

        else if(btnText=="Help")
        {
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);
        }
        else{
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }

  

    };
    const openNotification = () =>
    {
        if(!notification)
        {
            setDiscover(false);
            setHelp(false);
            setNotification(true);
            setProfile(false);
        }
        else
        {
            setNotification(false);
        }
    };

    const openProfile = () =>{
        if(!profile)
        {
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(true);
        }
        else{
            setProfile(false);
        }
    };

    const openSideBar = () =>
    {
        if(!sideMenu)
        {
            setSideMenu(true);
        }   
        else{
            setSideMenu(false);
        }
    };

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <Image src={images.logo} alt = "nft maeketplace"
                        width={100}
                        height={100}/>
                    </div>
                    <div className={Style.navbar_container_left_box_input_box}>
                        <div className={Style.navbar_container_left_box_input_box_input}>
                            <input type="text" placeholder="Search NFT" />
                            <BsSearch onClick={ () => {}} className={Style.search_icon}/>
                        </div>
                    </div>
                </div>

                
                <div className={Style.navbar_container_right}>
                    <div className= {Style.navbar_container_right_discover}>
                        
                       
                        <p onClick={(e) => openMenu(e)}>Discover</p>
                        {discover && 
                        (
                            <div className={Style.navbar_container_right_discover_box}>
                            <Discover />
                        </div>
                        )}
                        </div>
                        {/*help center*/}
                        <div className= {Style.navbar_container_right_helpCenter}>
                            <p onClick={ (e) => openMenu(e)}> Help</p>
                            {help && (
                                <div className={Style.navbar_container_right_helpCenter_box}> 
                                    <HelpCenter />
                                </div>
                            )}
                        </div>

                    <div className={Style.navbar_container_right_notify}>
                        <MdCircleNotifications className={Style.notify} onClick={ () => openNotification() } />

                        {notification && <Notification/>}
                    </div>

                    <div className={Style.navbar_container_right_button}>
                        <Button btnName="Create"  handleClick={() => {}} />
                    </div>

                    {/*USER PROFILE*/}
                    <div className={Style.navbar_container_right_profile_box}>
                        <div className={Style.navbar_container_right_profile}>
                            <Image src={images.user} alt="User IMage "
                             width={40}
                             height={40} 
                             onClick={()=> openProfile() }
                             className={Style.navbar_container_right_profile}/>
                          {profile && <Profile  />}

                        </div>
                    </div>

                 {/*SIDE BAR MENU FOR MOBILE SECTION*/}

                 <div className={Style.navbar_container_right_menu}>
                    <CgMenuRight className={Style.menuIcon} 
                    onClick={() => openSideBar()}/>

                 </div>
                </div>
            </div>
            
             {sideMenu && (
                <div className={Style.SideBar}>
                    <SideBar setSideMenu = {setSideMenu} />
                </div>
             )}
        </div>
    )
    
}

export default NavBar;